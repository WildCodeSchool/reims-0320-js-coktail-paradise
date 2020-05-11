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
    this.props.cocktailsList.map((cocktailByLeters) => {
      if (cocktailByLeters.coktails != null) {
        cocktailByLeters.coktails.map((cocktail) => {
          if (Object.values(cocktail).includes(ingredient1)) {
            cocktailListSort = [...cocktailListSort, cocktail];
            if (cocktail.strIngredient1 !== null) {
              listeIngredients2 = [...listeIngredients2, cocktail.strIngredient1];
              /*console.log(cocktail.strIngredient1);*/
              if (cocktail.strIngredient2 !== null) {
                listeIngredients2 = [...listeIngredients2, cocktail.strIngredient2];
                /*console.log(cocktail.strIngredient2);*/
                if (cocktail.strIngredient3 !== null) {
                  listeIngredients2 = [...listeIngredients2, cocktail.strIngredient3];
                  /*console.log(cocktail.strIngredient3);*/
                  if (cocktail.strIngredient4 !== null) {
                    listeIngredients2 = [...listeIngredients2, cocktail.strIngredient4];
                    /*console.log(cocktail.strIngredient4);*/
                    if (cocktail.strIngredient5 !== null) {
                      listeIngredients2 = [...listeIngredients2, cocktail.strIngredient5];
                      /*console.log(cocktail.strIngredient5);*/
                      if (cocktail.strIngredient6 !== null) {
                        listeIngredients2 = [...listeIngredients2, cocktail.strIngredient6];
                        /*console.log(cocktail.strIngredient6);*/
                        if (cocktail.strIngredient7 !== null) {
                          listeIngredients2 = [...listeIngredients2, cocktail.strIngredient7];
                          /*console.log(cocktail.strIngredient7);*/
                          if (cocktail.strIngredient8 !== null) {
                            listeIngredients2 = [...listeIngredients2, cocktail.strIngredient8];
                            /*console.log(cocktail.strIngredient8);*/
                          }
                        }
                      }
                    }

                  }}}}
          /*console.log('--------------');*/
        }});
      }
    });
    listeIngredients2 = [...new Set(listeIngredients2)];
    this.setState({ listeIngredients2 });
    this.setState({ cocktailListSort })
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
