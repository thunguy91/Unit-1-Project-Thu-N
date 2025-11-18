import './SignUpPage.css';
import '../../App.css';
import dropPin from '../../assets/DropPin.png';
import { Link } from 'react-router';
 
export default function SignUp(){
    return(
        <div className="signup-page">
            <div className="logo-container">
                <div className='logo'>
                    <img src={dropPin} alt="Drop Pin" className="pin-icon" />
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
                <Link to ='/home' className='btn'>Sign Up</Link>
                <h4>
                Already have an account? <Link to='/'><strong>Log in</strong>.</Link>
                </h4>
            </div>
        </div>
    )
}