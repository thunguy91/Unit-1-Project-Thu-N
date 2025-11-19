import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './SignUpPage.css';
import '../../App.css';
import dropPin from '../../assets/DropPin.png';

 
export default function SignUp(){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors,setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        let formErrors = {};

        if (!name.trim()) {
            formErrors.name = 'Name is required.';
        }
        if (!email.trim()) {
            formErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Enter a valid email.';
        }

        if (!password.trim()) {
            formErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters.';
        }

        if (!confirmPassword.trim()) {
            formErrors.confirmPassword = 'Confirm your password.';
        } else if (confirmPassword !== password) {
            formErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) return;

        navigate ('/home');
    }


    return(
        <div className= 'signup-page'>
            <div className= 'logo-container'>
                <div className= 'logo'>
                    <img src={dropPin} alt= 'Drop Pin' className= 'pin-icon' />
                    <h1 className= 'logo-text'>RADII</h1>
                </div>
                <p className= 'tagline'>
                    SMALL CIRCLE.<br />
                    BIG DISCOVERIES.<br />
                    POWERED BY CURIOSITY.
                </p>
            </div>

            <div className= 'form-container'>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type= 'text'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                    {errors.name && <p className= 'error'>{errors.name}</p>}
                    
                    <label>Email:</label>
                    <input 
                        type= 'email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    {errors.email && <p className= 'error'>{errors.email}</p>}
                    
                    <label>Password:</label>
                    <input 
                        type= 'password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    {errors.password && <p className= 'error'>{errors.password}</p>}
                    
                    <label>Confirm Password:</label>
                    <input 
                        type= 'password'
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && 
                        <p className='error'>{errors.confirmPassword}</p>
                    }
                    <br />
                    <button type= 'submit' className= 'btn'>
                        Sign Up
                    </button>
                </form>
                <br />
                <h4>
                    Already have an account? <Link to='/'><strong>Log in</strong>.</Link>
                </h4>
            </div>
        </div>
    )
}