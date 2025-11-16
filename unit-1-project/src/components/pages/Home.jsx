
// import stockPhoto from './assets/mobilePhoneNav.jpg'
import { Link } from 'react-router';
import stockPhoto from '../../assets/mobilePhoneNav.jpg'
import Header from '../layout/Header';

function Home(){
    return(
        <div>
        <main>
            <img src= {stockPhoto} alt="phone showing navigation" />
            <div className='form-container'>
                <form action="submit">
                    <label>Select starting location:</label>
                    <input type="text" />
                    <button>Use current location</button>
                    <br />
                    <label>Select radius:</label>
                    <input type="range" min={.25} max={50} />
                    <br />
                </form>                    
                <button type='submit'><Link to= '/explore'>Explore!</Link></button>
            </div>
        </main>
        </div>
    )
}

export default Home;