
// import stockPhoto from './assets/mobilePhoneNav.jpg'
import stockPhoto from '../../assets/mobilePhoneNav.jpg'

function Main(){
    return(
        <div>
        <main>
            <img src= {stockPhoto} alt="phone showing navigation" />
            <div>
                <form action="submit">
                    <label>Select starting location:</label>
                    <input type="text" />
                    <button>Use current location</button>
                    <br />
                    <label>Select radius:</label>
                    <input type="range" min={.25} max={50} />
                    <br />
                </form>                    
                <button type='submit'>Explore!</button>
            </div>
        </main>
        </div>
    )
}

export default Main;