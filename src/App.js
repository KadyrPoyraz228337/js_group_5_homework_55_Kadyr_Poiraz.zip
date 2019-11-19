import React, {Component, Fragment} from 'react';
import Ingredients from "./Components/ingrediients";
import Burger from "./Components/burger";
import "./App.css";

const ingredients = [
    {name: 'Meat', price: 50, image: 'img'},
    {name: 'Cheese', price: 20, image: 'img'},
    {name: 'Salad', price: 5, image: 'img'},
    {name: 'Bacon', price: 30, image: 'img'},
];

class App extends Component {
  state = {
    ingredients: [
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]
  };

    render() {
        return (
            <Fragment>
                <div className="burgerAppHeader">
                    <h1>my burger app</h1>
                </div>
                <div className="burgerAppBlock">
                    <Ingredients
                        ingredientsInfo={this.state.ingredients}
                        onClick={this.addCount}
                        deleteOneUnit={this.subtractOneUnitFromTheCounter}
                    />
                    <Burger/>
                </div>
            </Fragment>
        );
    }

    addCount = name => {
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(elem => elem.name === name);
        const ingredient = ingredients[index];

        ingredient.count++;

        ingredients[index] = ingredient;

        this.setState({ingredients});
    };

    subtractOneUnitFromTheCounter = name => {
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(elem => elem.name === name);
        const ingredient = ingredients[index];

        ingredient.count--;

        ingredients[index] = ingredient;

        this.setState({ingredients});
    }

}

export default App;