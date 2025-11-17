import { Link } from 'react-router';
import stockPhoto from '../../assets/mobilePhoneNav.jpg'
import '../../App.css';
import './Home.css'

function Home(){
    return(
        <div className='home-form'>
            <div className='img-container'>
                <img src= {stockPhoto} alt="phone showing navigation" />
            </div>
            <div className='form-container'>
                <form action="submit">
                    <label>Select starting location:</label>
                    <input type="text" />
                    <button className='current-loc-btn'>Use current location</button>
                    <br />
                    <label>Select radius:</label>
                    <input type="range" min={.25} max={50} />
                    <p className='radius-output'></p>
                    <br />
                </form>                    
                <Link to= '/explore' className='btn'>Explore!</Link>
            </div>
        </div>
    )
}

export default Home;