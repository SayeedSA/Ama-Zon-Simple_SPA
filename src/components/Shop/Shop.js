import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,20);
    const [products, setProducts] = useState(first10)
    const [cart, setcart] = useState([])
    const handleAddProduct = (product) =>{
        const newCart = [...cart,product]
        setcart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                    products.map(product => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={product}>
   
                        </Product>)
                }
           
            </div>
            <div className="cart-container">
                {/* <h5>Order Summary: {cart.length}</h5> */}
                <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Shop;