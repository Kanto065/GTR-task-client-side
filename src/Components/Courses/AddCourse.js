import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddCourse = () => {

    const [category, setCategory] = useState([]);
    const [value, setValue] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44389/api/Product/Create', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
            .then(res => res.json())
            .then(data => { setCategory(data); console.log(data); })
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    const handleAddCourse = (event) => {
        event.preventDefault();
        const Title = event.target.Title.value;
        const Description = event.target.Description.value;

        const Price = event.target.Price.value;
        const categoryId = value;
        console.log(categoryId);

        const course = { Description,  Title,  categoryId, Price };
        const rs = JSON.stringify(course);
        console.log(rs);

        //post to server
        const url = 'https://localhost:44389/api/Course/Create';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(course)
        })
            .then()
            .then()
        navigate('/AllCourse')
    }


    return (
        
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleAddCourse}>
                    <div className="input-group">
                        <label htmlFor="Title">Name</label>
                        <input type="text" name="Title" placeholder=' product name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Description">Description</label>
                        <input type="text" name="Description" placeholder='Description' required />
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="type">Category</label>
                        <select value={category.Id} onChange={handleChange} name='type' required>
                            <option >---Select one---</option>
                            {category.map((option) => (
                                <option value={option.Id}>{option.Name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="Price">Price</label>
                        <input type="text" name='Price' placeholder='Price' required />
                    </div>


                    <input className='form-submit' type="submit" value="Add Product" />
                </form>
                <p>
                    View Courses <Link className='form-link' to="/AllProduct">go to course list</Link>
                </p>
            </div>
        </div>


    );
};

export default AddCourse;