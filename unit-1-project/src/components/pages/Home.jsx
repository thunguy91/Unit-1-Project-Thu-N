import { Link } from 'react-router';
import { useState } from 'react';
import stockPhoto from '../../assets/mobilePhoneNav.jpg'
import '../../App.css';
import './Home.css'

function Home(){
    const [radius, setRadius] = useState(0.25);
    const [startingLocation, setStartingLocation] = useState('');
    const [locationError, setLocationError]= useState(null);

    // const GOOGLE_API_KEY = VITE_GOOGLE_MAPS_API_KEY;
    const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setStartingLocation(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
                setLocationError(null);
            },
            (error) => {
                setLocationError(error.message);
            }
        );
        } else {
            setLocationError('Geolocation is not supported by this browser.');
        }
    };

    return(
        <div className='home-form'>
            <div className='img-container'>
                <img src= {stockPhoto} alt="phone showing navigation" />
            </div>
            <div className='form-container'>
                <form action="submit" id='form'>
                    <div className='form-group'>
                    <label htmlFor= 'starting-location'>Select starting location:</label>
                    <input 
                        type="text"
                        id='starting-location'
                        name='starting-location'
                        placeholder='' 
                        value={startingLocation}
                        onChange={(e)=> setStartingLocation(e.target.value)}
                    />
                    <button 
                        type='button' 
                        className='current-loc-btn'
                        onClick={handleUseCurrentLocation}
                    >
                        Use current location
                    </button>
                    </div>

                    <div className='form-group radius-group'>
                        <label htmlFor = 'radius'>Select radius:</label>
                        <input 
                            type="range"   
                            id='radius'
                            name='radius'
                            min={.15}
                            max={5}
                            step={0.05}
                            value={radius}
                            onChange={(e) => setRadius(e.target.value)}
                        />
                        <p className='radius-output'>Radius: {radius} miles</p>
                    </div>
                </form> 
                {/* <br />                    */}
                <Link to= '/explore' className='btn' state={{latLng: startingLocation.split(',').map(Number)}}>Explore!</Link>
            </div>
        </div>
    )
}

export default Home;