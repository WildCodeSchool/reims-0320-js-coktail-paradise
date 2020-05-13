import React from 'react';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listeIngredients2: [],
      cocktailListSort: [],
    };
  }

  seachInput1 = (event) => {
    this.props.setKeywords1(event.target.value);
    this.ingredient2Loading(event.target.value);
  }

  ingredient2Loading = (ingredient1) => {
    let listeIngredients2 = [];
    let cocktailListSort = [];

    this.props.cocktailList.forEach((cocktail) => {
      if (Object.values(cocktail).includes(ingredient1)) {
        cocktailListSort.push(cocktail);
      }
    });

    cocktailListSort.forEach((cocktail) => {
      for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`] != null) {
          listeIngredients2 = [...listeIngredients2, cocktail[`strIngredient${i}`]];
        }
      }
    });
    listeIngredients2 = [...new Set(listeIngredients2)];

    this.setState({ listeIngredients2, cocktailListSort });
  }

  seachInput2 = (event) => {
    let lastsCocktails = [];
    this.state.cocktailListSort.map((cocktail) => {
      if (Object.values(cocktail).includes(event.target.value)) {
        console.log(cocktail);
        lastsCocktails = [...lastsCocktails, cocktail];

      }
    });
    this.props.cocktailListSort(lastsCocktails);
  }


  render() {
    return(
      <div>
        <div className="selectorDiv">
          <label htmlFor="ingredient-select" />
          <select className="selector" name="ingredients1" id="ingredient1-select" onChange={(event) => this.seachInput1(event)}>
            <option value="">--Select ingredient 1--</option>
            {this.props.ingredientsList.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
          </select>
        </div>
        <div className="selectorDiv">
          <label htmlFor="ingredient-select" />
          <select className="selector" name="ingredients2" id="ingredient2-select" onChange={(event) => this.seachInput2(event)}>
            <option value="">--Select ingredient 2--</option>
            {this.state.listeIngredients2.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
          </select>
        </div>
      </div>
    )
  }
}
export default Select;