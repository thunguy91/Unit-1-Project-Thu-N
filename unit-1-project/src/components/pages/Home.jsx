import { useState } from 'react';
import { useNavigate } from 'react-router';
import stockPhoto from '../../assets/mobilePhoneNav.jpg';
import Button from '../Button';
import '../../App.css';
import './stylesheets/Home.css';
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
                        <label className= "start-label" htmlFor="starting-location">Select starting location:</label>
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
                        <Button 
                            type="button" 
                            onClick={handleUseCurrentLocation} 
                            className="current-loc-btn"
                        >
                            Use current location   
                        </Button>
                    </div>

                    <div className="form-group radius-group">
                        <label className= "start-label" htmlFor="radius">Select radius:</label>
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

                    <Button 
                        type="button"   
                        className= "explore-btn" 
                        onClick={handleExplore}
                    >
                        Explore!
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Home;
