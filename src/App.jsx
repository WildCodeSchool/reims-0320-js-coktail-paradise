import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
import './components/Cocktails.css';
import CocktailList from './components/CocktailList';
import ButtonShow from './components/ButtonShow';
import NavBar from './components/NavBar';
import CocktailResult from './components/CocktailResult';
import CocktailDescription from './components/CocktailDescription';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      allCocktails: [],
      ingredientsList: [],
      keywords1: null,
      keywords2: null,
      cocktails1: [],
      cocktails2: [],
      intersection: [],
      showYourCocktails: true,
      showDescription: true,
      errorMessage: 'ERROOOOOOOOOOOOOORS',
      errorShow: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  setKeywords1 = (keywords1) => this.setState({ keywords1 });
  setKeywords2 = (keywords2) => this.setState({ keywords2 });

  manageError = () => {
    this.setState({ errorShow : !this.state.errorShow });
  }

  searchIngredient1 = () => {
  
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords1 !== undefined ? this.state.keywords1 : ''}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktails1: data.drinks });
      });
  }
  
  searchIngredient2 = () => {
    
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords2 !== undefined ? this.state.keywords2 : ''} `)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktails2: data.drinks });
      });
  }

  compare = () => {
    if (this.state.cocktails1 === undefined || this.state.cocktails2 === undefined) {
      this.setState({ errorMessage: 'Il manque un ingrédient' });
      this.setState({ errorShow: true });
    } else {
      const intersection = this.state.cocktails1.filter((cocktail1) => this.state.cocktails2.findIndex(cocktail2 => cocktail1.strDrink === cocktail2.strDrink) !== -1);
      this.setState({ intersection });
      if (intersection.length === 0) {
        this.setState({ errorMessage: 'aucun cocktail ne contient ces ingrédients' });
        this.setState({ errorShow: true });
      }
    }
  }

  showYourCocktails =() => {
    this.setState({
      showYourCocktails: false,
    });
  }
  
  showDescription =() => {
    this.setState({
      showDescription: false,
    });
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
      <div>
        <div>
          <div className="text">
            <div className="makeYourCocktail">
              <div className="searchBar">
                <h2>Ingredient 1</h2>
                <SearchBar setKeywords1={this.setKeywords1}  setKeywords2={this.setKeywords2}  onSearch1={this.searchIngredient1} onSearch2={this.searchIngredient2}  list={this.state.ingredientsList} />
              </div>
              <div>
                <CocktailList list={this.state.intersection === undefined ? [""] : this.state.intersection} />
              </div>
              <div>
                <ButtonShow onClick={this.compare} />
              </div>
            </div>
          </div>
          <div className="divButtonCocktail">
            <button className="buttonCocktail" onClick={this.showYourCocktails} >
              Your Cocktails
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;