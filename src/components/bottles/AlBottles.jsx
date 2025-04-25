import React, { use, useEffect, useState } from "react";
import './bottles.css';
import SingleBottle from "../bottle/SingleBottle";
import { addToLS, getCartFromLS } from "../../utility/addToLS";

function AllBottles({bottlePromise}) {

    const bottles = use(bottlePromise);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedItemsCart = getCartFromLS();
        const newCart = bottles.filter((eachBottle) => storedItemsCart.includes(eachBottle.id));
        console.log(newCart);
        setCart(newCart);
    }, [bottles])

    const handleAddtoCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        alert(`${bottle.name} added to cart successfully`);
        addToLS(bottle.id);
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