import React from 'react';
import "./style.css";

const BurgerCounter = ({ingredients, ingredientsInfo}) => {
    let counter = 20;
    ingredients.map((ingr, index) => {
        counter += ingr.count * ingredientsInfo[index].price
    });
    return (
        <div className="burgerCounter">
            <h5>price: {counter}</h5>
        </div>
    );
};

export default BurgerCounter;