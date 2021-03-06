import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock} =props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p>by: {seller}</p>
                <p>$: {price}</p>
                <br/>
                <p><small>Only {stock} left in stock</small></p>
                <button className='main-button' onClick={() =>  props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To cart</button>
            </div>
            
        </div>
    );
};

export default Product;