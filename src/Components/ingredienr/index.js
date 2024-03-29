import React from 'react';
import "./style.css";

const Ingredient = ({ deleteOneUnit, onClick, ingredientTitle, ingredientCount, ingredientImg}) => {
    return (
        <div className="ingredientListItem">
            <a href="#" className="ingredientAdd" onClick={onClick} title="Нажмите на ингредиент, чтобы добавить его в бургер" >
                <img src={ingredientImg} alt="#" className="ingredientImg" />
                <h5 className="ingredientTitle">{ingredientTitle}</h5>
            </a>
            <p className="ingredientCount">x{ingredientCount}</p>
            {ingredientCount > 0 && <button onClick={deleteOneUnit} className="ingredientBtn"> Delete </button>}
        </div>
    );
};

export default Ingredient;