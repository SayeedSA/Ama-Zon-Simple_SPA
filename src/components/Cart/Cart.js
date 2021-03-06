import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if(totalPrice>15){
        shipping=4.99;
    }
    else if(totalPrice >0){
        shipping=12.99;
    }
    else if(totalPrice >35){
        shipping =0;
    }

    const tax = Math.round(totalPrice / 10).toFixed(2);
    const grandtotal = (totalPrice + shipping + Number(tax))
    
    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered:{cart.length} </p>
            <p>Product price: {formateNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>tax + Vat: {tax}</small></p>
            <p>Total price: {formateNumber(grandtotal)}</p>
        </div>
    );
};

export default Cart;