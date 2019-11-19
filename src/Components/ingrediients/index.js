import React from 'react';
import "./style.css"
import Ingredient from "../ingredienr";

const Ingredients = ({ingredientsInfo}) => {
    return (
        <div className="ingredientsBlock">
            {ingredientsInfo.map(ingr => (
                <Ingredient
                    key={ingr.name}
                    ingredientTitle={ingr.name}
                    ingredientCount={ingr.count}
                />
            ))}
        </div>
    );
};

export default Ingredients;