import React from 'react';
import "./style.css";
import Meat from "../meat";
import Cheese from "../Cheese";
import Salad from "../Salad";
import Bacon from "../Bacon";

const Burger = ({ingredients}) => {
    return (
        <div className="burgerBlock">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(ing => {
                const arr = [];
                if (ing.name === 'Cheese') {
                    for(let i = 0; i < ing.count; i++) {
                        arr.push(<Cheese/>)
                    }
                }
                if(ing.name === 'Meat') {
                    for(let i = 0; i < ing.count; i++) {
                        arr.push(<Meat/>)
                    }
                }
                if (ing.name === 'Salad') {
                    for(let i = 0; i < ing.count; i++) {
                        arr.push(<Salad/>)
                    }
                }
                if (ing.name === 'Bacon') {
                    for(let i = 0; i < ing.count; i++) {
                        arr.push(<Bacon/>)
                    }
                }
                return arr;
            })}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;