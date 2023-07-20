import { colors } from '@mui/material';
import React from 'react'
import { useState, useEffect } from "react";


const Login = () => {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    return (
        <div className='mt-5 ms-5'>
            <br />
            <h1>Employee App</h1>

            <div class="card" 
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '300px',
              }}
              >
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">

                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.username}</p>
                            <div className="field">

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.password}</p>
                            <button className="fluid ui button blue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Login