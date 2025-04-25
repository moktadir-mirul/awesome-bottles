import React from 'react';
import "./Cart.css"
import { removeFromCart } from '../../utility/addToLS';

const Cart = ({cartItems}) => {
    const handleremove = (Id) => {
        removeFromCart(Id)
    }
    return (
        <div className='container'>
            {
                cartItems?.map(item => <div className='cart-container'>
                    <img src={item.img} alt="" />
                    <div>
                        <h1>{item.name}</h1>
                        <button onClick={() => handleremove(item.id)}>Cancel</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;