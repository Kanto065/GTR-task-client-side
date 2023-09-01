import React from 'react';
import './course.css';

const Course = (props) => {

    const { Title, Description, Thumbnail, Price, Learning } = props.course;
    return (
        <div className='product'>
            <img src={Thumbnail} alt="" />
            <div className="product-info">
                <p className='product-name'>{Title}</p>
                <p>Price: {Price} TK</p>
                <p><small>Description: {Description}</small></p>
                <p><small>Learning: {Learning}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.course)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Course;