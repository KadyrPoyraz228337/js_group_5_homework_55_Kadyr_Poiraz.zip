import React from 'react';
import "./style.css";

const Ingredient = ({ deleteOneUnit, onClick, ingredientTitle, ingredientCount}) => {
    return (
        <div className="ingredientListItem">
            <a href="#" className="ingredientAdd" onClick={onClick} >
                <img src="#" alt="#" className="ingredientImg" />
                <h5 className="ingredientTitle">{ingredientTitle}</h5>
            </a>
            <p className="ingredientCount">x{ingredientCount}</p>
            {ingredientCount > 0 && <button onClick={deleteOneUnit} className="ingredientBtn"> Удалить </button>}
        </div>
    );
};

export default Ingredient;