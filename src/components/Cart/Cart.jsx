import React from 'react';
import "./Cart.css"
import { removeFromCart } from '../../utility/addToLS';

const Cart = ({cartItems, setCart}) => {
    const handleremove = (Id) => {
        const newCartItems = cartItems.filter(item => item.id !== Id)
        setCart(newCartItems);
        removeFromCart(Id);
    }
    return (
        <div className='container'>
            {
                cartItems?.map((item, index) => <div key={index} className='cart-container'>
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