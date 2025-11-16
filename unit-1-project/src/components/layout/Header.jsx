import { Link } from 'react-router'
import DropPin from '../../assets/DropPin.png'

export default function Header(){
    return (
        <header>
          <h1><img src={DropPin} alt="magnifying glass inside drop pin" /><Link to="/home"> Radii</Link></h1>
        </header>
    )
}

{/* <nav>
              <button>Log In</button>
              <button>Sign Up</button>
            </nav> */}