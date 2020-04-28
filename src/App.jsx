import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
import CocktailList from './components/CocktailList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      allCocktails: [],
      ingredientsList: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const requests = alphabet.split('').map((letter) => (
      Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
      )
    ));
    Axios.all(requests).then(Axios.spread((...responses) => {
      let allCocktails = this.state.allCocktails;
      let ingredientsList = this.state.ingredientsList;

      responses.forEach((response) => {
        const data = response.data;
        if (data.drinks !== null) {
          data.drinks.forEach((drink) => {
            ingredientsList = [
              ...ingredientsList,
              drink.strIngredient1,
              drink.strIngredient2,
              drink.strIngredient3,
              drink.strIngredient4,
              drink.strIngredient5,
              drink.strIngredient6,
              drink.strIngredient7,
              drink.strIngredient8,
              drink.strIngredient9,
              drink.strIngredient10,
              drink.strIngredient11,
              drink.strIngredient12,
              drink.strIngredient13,
              drink.strIngredient14,
              drink.strIngredient15,
            ];
          });
          ingredientsList = [...new Set(ingredientsList)];
          ingredientsList = ingredientsList
            .filter((ingredient) => ingredient != null && ingredient !== '')
            .map((ingredient) => ingredient[0].toUpperCase() + ingredient.slice(1));
          ingredientsList.sort();
        }

        allCocktails = [...allCocktails, { coktails: data.drinks }];
      });

      this.setState({
        ingredientsList,
        allCocktails,
      });
    }));
  };

  render() {
    return (
      <div className="makeYourCocktail">
        <div className="searchBar">
          <SearchBar list={this.state.ingredientsList} />
        </div>
        <div>
          <CocktailList list={this.state.cocktails} />
        </div>
      </div>
    );
  }
}

export default App;
