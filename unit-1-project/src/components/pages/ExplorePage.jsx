import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useLocation } from "react-router";
import { mockPlaces } from "../test-data/mockPlace";
import PlaceModal from "../modals/PlaceModal";
import './ExplorePage.css';
import '../../App.css';

export default function ExplorePage() {
    const location = useLocation();
    const place = location.state;

    const [center, setCenter] = useState(null); 
    const [loading, setLoading] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    //--- thumbnails ---//
    const [startIndex, setStartIndex] = useState(0);
    const showThumbnail = 3;
    const visiblePlaces = mockPlaces.slice(startIndex, startIndex + showThumbnail);

    const handleScrollUp = () => setStartIndex(prev => Math.max(prev - 1, 0));
    const handleScrollDown = () => setStartIndex(prev => Math.min(prev + 1, mockPlaces.length - showThumbnail));

    const [selectedPlace, setSelectedPlace]= useState(null);

    // ----list--- //
    const [list, setList] = useState([]);
    const addToList = (place)=> {
        setList(prev => [...prev, place]);
        setSelectedPlace(null);
    }

    useEffect(() => {
        const fetchCenter = async () => {
            if (!place) return;

            if (place.lat && place.lng) {
                setCenter({ lat: place.lat, lng: place.lng });
                setLoading(false);
            } else if (place.name) {
                try {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(place.name)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
                    );
                    const data = await response.json();
                    if (data.status === "OK") {
                        const loc = data.results[0].geometry.location;
                        setCenter({ lat: loc.lat, lng: loc.lng });
                    } else {
                        console.error("Geocode failed:", data.status);
                        setCenter({ lat: 39.9526, lng: -75.1652 }); 
                    }
                } catch (err) {
                    console.error(err);
                    setCenter({ lat: 39.9526, lng: -75.1652 });
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCenter();
    }, [place]);

    if (loadError) return <div>Map failed to load: {String(loadError)}</div>;
    if (!isLoaded || loading || !center) return <div>Loading map…</div>;

    return (
        <div>
            <main className="explore-main">
                <div className="container">
                    <GoogleMap
                        mapContainerClassName="map-container"
                        center={center}
                        zoom={15}
                    >
                        <Marker position={center} />
                    </GoogleMap>

                    <div className="places-container">
                        <button className="up-left" onClick={handleScrollUp}>▲</button>

                        <div className="places">
                            {visiblePlaces.map(p => (
                                <div key={p.id} className="place-card" onClick={()=> setSelectedPlace(p)}>
                                    <img 
                                        src={p.thumbnail} 
                                        alt={p.name} 
                                        className="place-thumb"/>
                                    <p className="place-name">{p.name}</p>
                                </div>
                            ))}
                        </div>

                        <button className="down-right" onClick={handleScrollDown}>▼</button>
                    </div>
                </div>
            </main>
            <button id="responsiveButton">
                View my List
            </button> 

            <div className="list-container"> 
                <h2>List:</h2> 

                    <ul> 
                        {list.length === 0 ? (
                            <li>No places added yet.</li>
                        ) : (
                            list.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))
                        )}
                    </ul>

                <div className="list-container-buttons"> 
                    <button>Save List</button> 
                    <button>Edit List</button> 
                </div> 
            </div>
            
            {selectedPlace && (
                <PlaceModal 
                    selectedPlace={selectedPlace} 
                    onClose={() => setSelectedPlace(null)} 
                    onAdd={addToList} 
                />
            )}

        </div>
    );
}
