import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './stylesheets/LogInPage.css';
import Button from '/src/components/Button/Button.jsx';
import Logo from '/src/components/Logo.jsx';


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
            <Logo/>
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
                    <Button type='submit' className='btn'>Log In</Button>
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