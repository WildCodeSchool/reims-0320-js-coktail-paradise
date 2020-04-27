import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
import CocktailList from './components/CocktailList';
import ButtonShow from './components/ButtonShow';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords1: null,
      keywords2: null,
      cocktails1: [],
      cocktails2: [],
      intersection: [],
      errorMessage: 'ERROOOOOOOOOOOOOORS',
      errorShow: false,
    };
  }

setKeywords1 = (keywords1) => this.setState({ keywords1 })
setKeywords2 = (keywords2) => this.setState({ keywords2 })

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
    this.setState ({ errorMessage : 'Il manque un ingrédient' })
    this.setState ({ errorShow : true })
  } else {
    this.setState ({ intersection: [] });
    this.setState ({ intersection:  this.state.cocktails1.filter((cocktail1) => this.state.cocktails2.findIndex(cocktail2 => cocktail1.strDrink === cocktail2.strDrink) !== -1)})
    if (this.state.intersection.length === 0) {
      this.setState ({ errorMessage :'aucun cocktail ne contient ces ingrédients'});
      this.setState ({ errorShow : true })

    }
  }
}

fullConsoleLog = () => {
  console.log(this.state.keywords1);
  console.log(this.state.cocktails1);
  console.log(this.state.keywords2);
  console.log(this.state.cocktails2);
  console.log(this.state.intersection)
}

render() {
  return (
    <div className="makeYourCocktail">
      <div className="searchBar">
        <h2>Ingredient 1</h2>
        <SearchBar setKeywords={this.setKeywords1} onSearch={this.searchIngredient1} />
      </div>
      <div className="searchBar">
        <h2>Ingredient 2</h2>
        <SearchBar setKeywords={this.setKeywords2} onSearch={this.searchIngredient2} />
      </div>
      <div>
        <CocktailList list={this.state.intersection} errorShow={this.state.errorShow} errorMessage={this.state.errorMessage} manageError={this.manageError} />
      </div>
      <div>
        <button type="button" onClick={this.fullConsoleLog}>BETA full console log</button>
        <ButtonShow onClick={this.compare} />
      </div>
    </div>
  );
}
}
export default App;