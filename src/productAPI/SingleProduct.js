import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { Name,ImagePath, Description, BrandName, Price, Type,Status } = props.product;
    return (
        <div>
            <div className='product'>
            <img src={ImagePath} alt="" />
            <div className="product-info">
                <p className='product-name'>{Name}</p>
                <p>Price: {Price} TK</p>
                <p><small>BrandName: {BrandName}</small></p>
                <p><small>Description: {Description}</small></p>
                <p><small>Type: {Type}</small></p>
                <p><small>Status: {Status}</small></p>
            </div>
            
        </div>
        </div>
    );
};

export default SingleProduct;