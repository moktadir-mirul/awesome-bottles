import React, { use } from "react";
import './bottles.css'
import Bottle from "../bottle/bottle";
import SingleBottle from "../bottle/SingleBottle";

function AllBottles({bottlePromise}) {

    const bottles = use(bottlePromise);

    return(
        <div>
            <h1 className="heading nat">Number of Awesome Bottles: {bottles.length}</h1>
          <div className="grid-design">
          {
                bottles.map(bottle => <SingleBottle key={bottle.id} bottle={bottle}></SingleBottle>)
            }
          </div>
        </div>
    )
}

export default AllBottles;