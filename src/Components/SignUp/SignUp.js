import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [Role, setRole] = useState([]);
    const [value, setValue] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44389/api/register', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => { setRole(data); })
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const UserName = event.target.name.value;
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        const CPassword = event.target.cpassword.value;
        const RoleId = value;
        console.log(RoleId);
        if (Password !== CPassword) {
            alert("pass and cpass doesn't match");
        }
        const user = { Email, Password, UserName, RoleId };
        const rs = JSON.stringify(user);
        console.log(rs);

        //post to server
        fetch('https://localhost:44389/api/register', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                //'Authentication': localStorage.getItem('token')
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        navigate('/login');
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="cpassword" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role">Select Role</label>
                        <select value={Role.Id} onChange={handleChange} name='role' required>
                            <option >---Select one---</option>
                            {Role.map((option) => (
                                <option value={option.Id}>{option.Name}</option>
                            ))}
                        </select>
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;