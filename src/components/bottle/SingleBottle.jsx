import React from 'react';
import "./bottle.css"

const SingleBottle = ({bottle, handleAddtoCart}) => {
    const {img, name, seller, price, stock} = bottle;
    return (
        <div className='bottle-design'>
            <div>
                <img className='btl-img' src={img} alt={name} />
            </div>
            <div>
            <h1 className='btl-name'><strong>Name:</strong> {name}</h1>
            <p><strong>Brand:</strong> {seller}</p>
            <p><strong>Price: </strong> ${price}</p>
            <p><strong>Remaining Stock:</strong> {stock}</p>
            </div>
            <div>
                <button onClick={() => handleAddtoCart(bottle)}>Buy Now</button>
            </div>
        </div>
    );
};

export default SingleBottle;