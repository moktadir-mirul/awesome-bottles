import React, { use, useEffect, useState } from "react";
import './bottles.css';
import SingleBottle from "../bottle/SingleBottle";
import { addToLS, getCartFromLS } from "../../utility/addToLS";
import Cart from "../Cart/Cart";

function AllBottles({bottlePromise}) {

    const bottles = use(bottlePromise);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedItemsCart = getCartFromLS();
        let storedCart = [];
        for (let bottleId of storedItemsCart) {
            let item = bottles.find(bottle => bottle.id === bottleId)
            storedCart.push(item); 
        }
        console.log(storedItemsCart, storedCart);
        setCart(storedCart);
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
            <Cart cartItems={cart}></Cart>
          <div className="grid-design">
          {
                bottles.map(bottle => <SingleBottle handleAddtoCart={handleAddtoCart} key={bottle.id} bottle={bottle}></SingleBottle>)
            }
          </div>
        </div>
    )
}

export default AllBottles;