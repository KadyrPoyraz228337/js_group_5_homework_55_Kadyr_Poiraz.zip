import React from 'react';
import "./style.css";
import Meat from "../meat";

const Burger = ({ingredients}) => {
    return (
        <div className="burgerBlock">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(ing => {
                let arr = [];
                if(ing.name === 'Meat') {
                    for(let i = 0; i < ing.count; i++) {
                        arr.push(<Meat/>)
                    }
                    return arr;
                }
            })}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;