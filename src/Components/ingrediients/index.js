import React from 'react';
import "./style.css"
import Ingredient from "../ingredienr";

const Ingredients = ({ingredientsInfo, onClick, deleteOneUnit, ingredients}) => {
    return (
        <div className="ingredientsBlock">
            <div className="ingredientsBlockHeader">
                <h5>Ingredients</h5>
            </div>
            {ingredientsInfo.map((ingr, index) => (
                <Ingredient
                    key={ingr.name}
                    ingredientTitle={ingr.name}
                    ingredientCount={ingr.count}
                    onClick={() => onClick(ingr.name)}
                    deleteOneUnit={() => deleteOneUnit(ingr.name)}
                    ingredientImg={ingredients[index].image}
                />
            ))}
        </div>
    );
};

export default Ingredients;