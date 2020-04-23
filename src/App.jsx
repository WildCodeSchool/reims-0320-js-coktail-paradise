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
      keywords: null,
      cocktails: [],
      allCocktailList: [],
    };
  }

setKeywords = (keywords) => this.setState({ keywords })

search = () => {
  Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords}`)
    .then((response) => response.data)
    .then((data) => {
      this.setState({ cocktails: data.drinks });
    });
}

render() {
  return (
    <div className="makeYourCocktail">
      <div className="searchBar">
        <h2>Ingredient 1</h2>
        <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
      </div>
      <div className="searchBar">
        <h2>Ingredient 2</h2>
        <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
      </div>
      <div>
        <CocktailList list={this.state.cocktails} />
      </div>
      <div>
        <ButtonShow onClick={() => this.setState ({ allCocktailList: this.state.cocktails.filter( (allCocktailList, index) => this.state.cocktails.indexOf(allCocktailList) !== index) }) } />
      </div>
    </div>
  );
}
}

export default App;
