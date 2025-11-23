import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './stylesheets/SignUpPage.css';
import '../../App.css';
import Button from '/src/components/Button/Button.jsx'
import Logo from '/src/components/Logo.jsx'

 
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
            <Logo/>
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
                    <Button type= 'submit' className= 'btn'>
                        Sign Up
                    </Button>
                </form>
                <br />
                <h4>
                    Already have an account? <Link to='/'><strong>Log in</strong>.</Link>
                </h4>
                
            </div>
        </div>
    )
}