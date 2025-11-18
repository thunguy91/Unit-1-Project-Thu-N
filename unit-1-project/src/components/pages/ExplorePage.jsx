import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useLocation } from "react-router";
import './ExplorePage.css';
import '../../App.css'


export default function ExplorePage (){
    const location = useLocation();
    const coords = location.state?.latLng;
    const center = coords ? { lat: coords[0], lng: coords[1] } : { lat: 39.9526, lng: -75.1652 };

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

//   console.log('isLoaded:', isLoaded, 'loadError:', loadError);

  if (loadError) return <div>Map failed to load: {String(loadError)}</div>;
  if (!isLoaded) return <div>Loading map script…</div>;
  
    return(
        <div>
            <main className="explore-main">
                <div className="container">
                    <GoogleMap
                        mapContainerClassName="map-container"
                        center={center}
                        zoom={12}>
                        <Marker position={center} />
                    </GoogleMap>
                    <div className="places-container">
                        <button className="up-left">▲</button>
                        <div className="places">

                        </div>
                        <button className="down-right">▼</button>
                    </div>
                </div>
            </main>
            <button id="responsiveButton">View my list</button>
            <div className="list-container">
                <h2>List:</h2>
                <ul>
                    <li>Place one</li>
                    <li>Place two</li>
                    <li>Place three</li>
                </ul>
                <div className="list-container-buttons">
                    <button>Save List</button>
                    <button>Edit List</button>
                </div>
            </div>
        </div>
    )
}