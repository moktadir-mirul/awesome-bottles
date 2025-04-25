import React from 'react';
import "./Cart.css"

const Cart = ({cartItems}) => {
    return (
        <div className='container'>
            {
                cartItems?.map(item => <div className='cart-container'>
                    <img src={item.img} alt="" />
                    <div>
                        <h1>{item.name}</h1>
                        <button>Cancel</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;