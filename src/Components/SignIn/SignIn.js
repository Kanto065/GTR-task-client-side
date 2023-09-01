import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css'
import useUserAuthState from '../hooks/useUserAuthState';

const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [user] = useUserAuthState();

    const from = location.state?.from?.pathname || '/';



    // if (user === "Student" || user === "Instructor") {
    //     navigate(from, { replace: true });
    // }

    // const handleUserSignIn = event => {
    //     event.preventDefault();
    //     signInWithEmailAndPassword(email, password);
    // }


    const handleUserSignIn = event => {
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;

        const user = { Email, Password };
        //post to server
        fetch('https://localhost:44389/api/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.AccessToken);
                console.log(localStorage.getItem('token'));
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>

                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to E-Learning? <Link className='form-link' to="/register">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;