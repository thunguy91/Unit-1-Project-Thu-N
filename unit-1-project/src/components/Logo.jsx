import dropPin from '../assets/DropPin.png'
import '/src/components/Logo.css'

const Logo = () => {
    return (
        <div className="logo-container">
            <div className='logo'>
                <img src={dropPin} alt="Drop Pin" className="pin-icon" />
                <h1 className="logo-text">RADII</h1>
            </div>
            <p className="tagline">
                SMALL CIRCLE.<br />
                BIG DISCOVERIES.<br />
                POWERED BY CURIOSITY.
            </p>
        </div>
    )
}

export default Logo;
