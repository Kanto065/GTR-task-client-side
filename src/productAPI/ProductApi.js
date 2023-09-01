import React, { useEffect, useState } from 'react';
import './ProductApi.css'
import SingleProduct from './singleProduct';


const ProductApi = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://www.pqstec.com/InvoiceApps/values/GetProductListAll', {
            method: 'GET',
            
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])


    return (
        <div>
            <p>product count{products.length}</p>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <SingleProduct key={product.id}
                            course={product}
                        ></SingleProduct>
                        )
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default ProductApi;