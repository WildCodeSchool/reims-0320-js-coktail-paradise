import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
/*import CocktailList from './components/CocktailList';*/
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: null,
      cocktails: []
    };
  }

setKeywords = (keywords) => this.setState({keywords})

search = () => {
  Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords}`)
    .then((response) => response.data)
    .then((data) => {
      this.setState({ cocktails: data.drinks.map((drink) => drink.strDrink)
      });
    });
}

render() {
  return (
    <div className="App">
      <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
  {this.state.cocktails.map((cocktail) => <li>{cocktail}</li>)}
    </div>
  );
}
}

export default App;
