import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
/* import CocktailList from './components/CocktailList'; */


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: null,
      cocktails: [],
    };
  }

setKeywords = (keywords) => this.setState({ keywords })

search = () => {
  Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords}`)
    .then((response) => response.data)
    .then((data) => {
      this.setState({ cocktails: data.drinks.map((drink) => drink.strDrink) });
    });
}

render() {
  return (
    <div>
      <head>
        <style>@import url(`https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap`);</style>
      </head>
      <body>
        <div className="makeYourCocktail">
          <div className="searchBar">
            <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
          </div>
          <ul>
            {this.state.cocktails.map((cocktail) => <li>{cocktail}</li>)}
          </ul>
        </div>
      </body>
    </div>
  );
}
}

export default App;
