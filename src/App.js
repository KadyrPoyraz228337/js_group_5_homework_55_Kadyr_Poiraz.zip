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
    ingredients: []
  };

    render() {

        return (
            <Fragment>
                <div className="burgerAppHeader">
                    <h1>my burger app</h1>
                </div>
                <div className="burgerAppBlock">
                    <Ingredients/>
                    <Burger/>
                </div>
            </Fragment>
        );
    }
}

export default App;