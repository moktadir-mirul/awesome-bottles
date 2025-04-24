import React, { use, useState } from "react";
import './bottles.css';
import SingleBottle from "../bottle/SingleBottle";

function AllBottles({bottlePromise}) {

    const bottles = use(bottlePromise);
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        alert(`${bottle.name} added to cart successfully`)
    }

    return(
        <div>
            <h1 className="heading nat">Number of Awesome Bottles: {bottles.length}</h1>
            <h1 className="heading nat">Number of bottles in Cart: {cart.length}</h1>
          <div className="grid-design">
          {
                bottles.map(bottle => <SingleBottle handleAddtoCart={handleAddtoCart} key={bottle.id} bottle={bottle}></SingleBottle>)
            }
          </div>
        </div>
    )
}

export default AllBottles;