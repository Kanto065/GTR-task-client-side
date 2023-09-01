import React, { useEffect, useState } from 'react';
import useCourse from '../hooks/useCourse';
import Course from './Course';
import './courses.css';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { getStoredCart } from '../Utility/localStorage';

const Courses = (props) => {
    const [courses, setCourses] = useCourse();

    const [cart, setCart] = useState([]);




    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = courses.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [courses])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        //addToDb(selectedProduct._id);
    }



    return (
        <div>
            this is list of course is {courses.length}
            <div className='shop-container'>
                <div className="products-container">
                    {
                        courses.map(course => <Course key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}
                        ></Course>
                        )
                    }
                </div>

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>


        </div >

    );
};

export default Courses;