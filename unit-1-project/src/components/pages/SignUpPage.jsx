import Radii from '../../assets/RADII.png'
import './SignUpPage.css'
import DropPin from '../../assets/DropPin.png'

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

                <button type="submit">Sign Up</button>
                </form>
                <h6>
                Already have an account? <a href="#"><strong>Log in</strong>.</a>
                </h6>
            </div>
        </div>

        // <div>
        //     <div className='image-container'>
        //         <img src={Radii} alt="Radii Logo" className='img'/>
        //     </div>
        //     <div className='form-container'>
        //         <form onSubmit = {(e) => e.preventDefault()}>
        //             <label>Name:</label>
        //             <br />
        //             <input type="text" name="" id="" />
        //             <br />

        //             <label>Email:</label>
        //             <br />
        //             <input type="email" name="" id="" />
        //             <br />
        //             <label>Password:</label>
        //             <br />
        //             <input type="password" name="" id="" />
        //             <br />
        //             <label>Confirm Password:</label>
        //             <br />
        //             <input type="password" name="" id="" />
        //         </form>
        //         <br />
        //         <button>Sign Up</button>
        //         <h6>Already have an account? <a href=""><strong>Log in</strong>.</a></h6>            </div>
        // </div>
    )
}