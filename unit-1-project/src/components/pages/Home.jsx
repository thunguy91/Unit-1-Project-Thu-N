import { useState } from 'react';
import { useNavigate } from 'react-router';
import stockPhoto from '../../assets/mobilePhoneNav.jpg';
import '../../App.css';
import './Home.css';
import mockStartLocation from '../test-data/mockStartLocation';

function Home() {
    const navigate = useNavigate();

    const [radius, setRadius] = useState(0.25);
    const [startingLocation, setStartingLocation] = useState('');
    const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);
    const [currentCoords, setCurrentCoords] = useState(null);

    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    setStartingLocation("using current location");
                    setUsingCurrentLocation(true);
                    setCurrentCoords({ lat: coords.latitude, lng: coords.longitude });
                },
                (err) => {
                    console.error(err);
                    alert("Unable to get your location.");
                }
            );
        } else {
            alert("Geolocation not supported.");
        }
    };

    const handleExplore = () => {
        if (usingCurrentLocation && currentCoords) {
            navigate('/explore', { state: { ...currentCoords, name: "Current Location" } });
            return;
        }

        if (!startingLocation.trim()) {
            alert("Please enter a starting location or use current location.");
            return;
        }

        const match = mockStartLocation.find(
            place => place.name.toLowerCase() === startingLocation.trim().toLowerCase()
        );

        if (match) {
            navigate('/explore', { state: match });
        } else {
            navigate('/explore', { state: { name: startingLocation.trim() } });
        }
    };

    return (
        <div className="home-form">
            <div className="img-container">
                <img src={stockPhoto} alt="phone showing navigation" />
            </div>

            <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="starting-location">Select starting location:</label>
                        <input
                            type="text"
                            id="starting-location"
                            value={startingLocation}
                            onChange={(e) => {
                                setStartingLocation(e.target.value);
                                setUsingCurrentLocation(false);
                                setCurrentCoords(null);
                            }}
                            placeholder="Type your starting location"
                            style={{ fontStyle: usingCurrentLocation ? 'italic' : 'normal' }}
                        />
                        <button type="button" onClick={handleUseCurrentLocation}>
                            Use current location
                        </button>
                    </div>

                    <div className="form-group radius-group">
                        <label htmlFor="radius">Select radius:</label>
                        <input
                            type="range"
                            id="radius"
                            min={0.15}
                            max={5}
                            step={0.05}
                            value={radius}
                            onChange={(e) => setRadius(e.target.value)}
                        />
                        <p>Radius: {radius} miles</p>
                    </div>

                    <button type="button" className= "btn" onClick={handleExplore}>Explore!</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
