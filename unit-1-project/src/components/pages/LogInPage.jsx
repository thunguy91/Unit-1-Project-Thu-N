import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './stylesheets/LogInPage.css';
import Button from '/src/components/Button/Button.jsx';
import Logo from '/src/components/Logo.jsx';
import Form from '/src/components/Form/Form.jsx';

export default function LogIn() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    const mockUser = {
        email: "thunguyen88@email.com",
        password: "PTswdev25"
    };

    const fields = [
        {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            validate: (value) => {
                if (!/\S+@\S+\.\S+/.test(value)) {
                    return "Enter a valid email address.";
                }
                return "";
            }
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
            validate: (value) => {
                if (!value.trim()) return "Password is required.";
                return "";
            }
        }
    ];

    const handleSubmit = (values) => {
        if (
            values.email === mockUser.email &&
            values.password === mockUser.password
        ) {
            setLoginError("");
            navigate("/home");
        } else {
            setLoginError("Invalid email or password.");
        }
    };

    return (
        <div className="login-page">
            <Logo />

            <div className="form-container">
                <Form
                    fields={fields}
                    onSubmit={handleSubmit}
                    renderSubmitButton={() => (
                        <Button type="submit" className="btn">
                            Log In
                        </Button>
                    )}
                />

                {loginError && (
                    <p className="error" style={{ marginTop: "8px" }}>
                        {loginError}
                    </p>
                )}

                <h4>
                    Don’t have an account?{" "}
                    <Link to="/signup">
                        <strong>Sign Up</strong>.
                    </Link>
                </h4>
            </div>
        </div>
    );
}
