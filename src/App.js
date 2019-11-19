import React, {Component, Fragment} from 'react';
import Ingredients from "./Components/ingrediients";
import Burger from "./Components/burger";
import "./App.css";

const ingredients = [
    {name: 'Meat', price: 50, image: 'http://pngimg.com/uploads/cutlet/cutlet_PNG103.png'},
    {name: 'Cheese', price: 20, image: 'https://pngicon.ru/file/uploads/cheese.png'},
    {name: 'Salad', price: 5, image: 'http://pngimg.com/uploads/salad/salad_PNG2809.png'},
    {name: 'Bacon', price: 30, image: 'https://storage.delikateska.ru/cache/7/5/fde114cc-f0b0-401f-b3da-d6ca04dfe015.png/w400h300.png'},
];

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          ingredients: [
              {name: 'Meat', count: 0},
              {name: 'Cheese', count: 0},
              {name: 'Salad', count: 0},
              {name: 'Bacon', count: 0},
          ]
      };
  }

    render() {
        return (
            <Fragment>
                <div className="burgerAppHeader">
                    <h1>my buter app</h1>
                </div>
                <div className="burgerAppBlock">
                    <Ingredients
                        ingredientsInfo={this.state.ingredients}
                        onClick={this.addCount}
                        deleteOneUnit={this.subtractOneUnitFromTheCounter}
                        ingredients={ingredients}
                    />
                    <Burger
                        ingredients={this.state.ingredients}
                        ingredientsInfo={ingredients}
                    />
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

        localStorage.setItem('Ingredients', JSON.stringify(ingredients));
        this.setState({ingredients});
    };

    subtractOneUnitFromTheCounter = name => {
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(elem => elem.name === name);
        const ingredient = ingredients[index];

        ingredient.count--;

        ingredients[index] = ingredient;

        localStorage.setItem('Ingredients', JSON.stringify(ingredients));
        this.setState({ingredients});
    }

}

export default App;