
// import stockPhoto from './assets/mobilePhoneNav.jpg'
import stockPhoto from '../../assets/mobilePhoneNav.jpg'


function Main(){
    return(
        <div>
        <main>
            <img src= {stockPhoto} alt="phone showing navigation" />
            <div>
              <p>Select starting location:</p>
              <input type="text" />
              <button>Use current location</button>
            </div>
            <div>
              <p>Select radius:</p>
              <input type="range" min={.25} max={50} />
            </div>
        </main>
        </div>
    )
}

export default Main;