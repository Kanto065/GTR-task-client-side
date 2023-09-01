import React from 'react';
import logo from '../../img/owl-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import useUserAuthState from '../hooks/useUserAuthState';

const Header = () => {
    const [user] = useUserAuthState();
    const navigate = useNavigate();

    const logout = () => {
        fetch('https://localhost:44389/api/logout', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
            .then(res => res.json())
            .then(data => { console.log(data); localStorage.removeItem('token'); })
        navigate('/');
    }

    return (

        <nav className='header'>
            <div className='logo-name'>
                <img src={logo} alt="" />
                <Link to="/AllCourse">E-learning</Link>
            </div>

            <div>
                <Link to="/AllCourse">All Course</Link>
                <Link to="/about">About</Link>
                {
                    user === 'Instructor' ? (
                        <>
                            <Link to="/AddCourse">Add Course</Link>
                            <button className='link' onClick={logout}>Sign out</button>
                        </>
                    ) : user === 'Student' ? (
                        <>
                            <Link to="/MyCourses">My Courses</Link>
                            <button className='link' onClick={logout}>Sign out</button>
                        </>
                    ) : user === 'admin' ? (

                        <Link to="/adminDash">Admin Dashboard</Link>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link></>
                    )
                }

            </div>
        </nav>



    );
};

export default Header;