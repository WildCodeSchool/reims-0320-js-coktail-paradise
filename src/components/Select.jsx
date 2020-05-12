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

    const nonNullCoktails = this.props.cocktailsList.filter(
      (cocktailByLetters) => cocktailByLetters.coktails != null,
    );
    nonNullCoktails.forEach((cocktailByLetters) => {
      cocktailListSort.push(
        ...cocktailByLetters.coktails.filter((cocktail) => Object.values(cocktail).includes(ingredient1)),
      );
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
      <div>
        <p>Ingredient 1</p>
        <label htmlFor="ingredient-select" />
        <select name="ingredients1" id="ingredient1-select" onChange={(event) => this.seachInput1(event)}>
          <option value="">--Please choose your ingredient</option>
          {this.props.ingredientsList.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
        </select>
      </div>
      <div>
      <p>Ingredient 2</p>
        <label htmlFor="ingredient-select" />
        <select name="ingredients2" id="ingredient2-select" onChange={(event) => this.seachInput2(event)}>
          <option value="">--Please choose your ingredient</option>
          {this.state.listeIngredients2.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
        </select>
      </div>
    </div>
    )
  }
}
export default Select;