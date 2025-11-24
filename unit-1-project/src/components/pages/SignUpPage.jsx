import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './stylesheets/SignUpPage.css';
import '../../App.css';
import Button from '/src/components/Button/Button.jsx';
import Logo from '/src/components/Logo.jsx';
import Form from '/src/components/Form/Form.jsx';

export default function SignUp() {
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState('');

    const mockUser = {
        email: "thunguyen88@email.com"
    };

    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            validate: (value) => {
                if (!/\S+@\S+\.\S+/.test(value)) {
                    return "Enter a valid email.";
                }
                if (value === mockUser.email) {
                    return "This email already has an account.";
                }
                return "";
            }
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            validate: (value) =>
                value.length < 8 ? "Password must be at least 8 characters." : ""
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            required: true,
            validate: (value, allValues) => {
                if (!value.trim()) return "Confirm your password.";
                if (value !== allValues.password) return "Passwords do not match.";
                return "";
            }
        }
    ];

    const handleSubmit = (values) => {
        navigate('/home');
    };

    return (
        <div className="signup-page">
            <Logo />

            <div className="form-container">
                <Form
                    fields={fields}
                    onSubmit={handleSubmit}
                    renderSubmitButton={() => (
                        <Button type="submit" className="btn">
                            Sign Up
                        </Button>
                    )}
                />

                {signupError && <p className="error">{signupError}</p>}
                <br />
                <h4>
                    Already have an account?{" "}
                    <Link to="/">
                        <strong>Log in</strong>.
                    </Link>
                </h4>
            </div>
        </div>
    );
}