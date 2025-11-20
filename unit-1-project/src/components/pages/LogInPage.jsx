import { Link, useNavigate } from 'react-router'
import dropPin from '../../assets/DropPin.png'
import './LogInPage.css'
import { useState } from 'react'

export default function LogIn(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    const mockUser = {
        email: 'thunguyen88@email.com',
        password: 'PTswdev25',
    }
    
    function handleSubmit(e){
        e.preventDefault();

        let formErrors = {};

        if(!email.trim()){
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Enter a valid email address.";
            }

        setErrors(formErrors);

        if(Object.keys(formErrors).length > 0) return;

        if (email === mockUser.email && password === mockUser.password) {
            setLoginError("");
            navigate("/home"); 
            } else {
            setLoginError("Invalid email or password.");
            }
    }
    return(
        <div className='login-page'>
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
                       
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    
                    <label>Password:</label>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    {loginError && <p className="error">{loginError}</p>}
                    <br />
                    <button type='submit' className='btn'>Log In</button>
                </form>
                <h4>
                    Don't have an account? 
                    <Link to = "/signup">
                        <strong>Sign Up</strong>.
                    </Link>
                </h4>
            </div>

        </div>
    )
}