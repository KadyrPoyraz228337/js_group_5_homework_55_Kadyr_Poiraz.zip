import React from 'react';
import "./style.css"
import Ingredient from "../ingredienr";

const Ingredients = ({ingredientsInfo, onClick, deleteOneUnit}) => {
    return (
        <div className="ingredientsBlock">
            {ingredientsInfo.map(ingr => (
                <Ingredient
                    key={ingr.name}
                    ingredientTitle={ingr.name}
                    ingredientCount={ingr.count}
                    onClick={() => onClick(ingr.name)}
                    deleteOneUnit={() => deleteOneUnit(ingr.name)}
                />
            ))}
        </div>
    );
};

export default Ingredients;