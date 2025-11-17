import Radii from '../../assets/RADII.png'
import './SignUpPage.css';
import '../../App.css';
import DropPin from '../../assets/DropPin.png';

export default function SignUp(){
    return(
        <div className="signup-page">
            <div className="logo-container">
                <div className='logo'>
                    <img src={DropPin} alt="Drop Pin" className="pin-icon" />
                    <h1 className="logo-text">RADII</h1>
                </div>
                <p className="tagline">SMALL CIRCLE.<br />BIG DISCOVERIES.<br />POWERED BY CURIOSITY.</p>
            </div>

            <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Name:</label>
                    <input type="text" />
                    
                    <label>Email:</label>
                    <input type="email" />
                    
                    <label>Password:</label>
                    <input type="password" />
                    
                    <label>Confirm Password:</label>
                    <input type="password" />
                </form>
                <br />
                <button className='btn'>Sign Up</button>
                <h4>
                Already have an account? <a href="#"><strong>Log in</strong>.</a>
                </h4>
            </div>
        </div>
    )
}