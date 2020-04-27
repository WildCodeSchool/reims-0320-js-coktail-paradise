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
    };
  }

  getData = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    alphabet.split('').forEach((letter) => {
      Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
      )
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            allCocktails: [...this.state.allCocktails, { letter, coktails: data.drinks }],
          });
        });
    });
  };
/*
  search = () => {
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.keywords}`
    )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktails: data.drinks });
      });
  };*/

  render() {
    return (
      <div className="makeYourCocktail">
        <div className="searchBar">
          <SearchBar onSearch={this.getData} />
        </div>
        <div>
          <CocktailList list={this.state.cocktails} />
        </div>
      </div>
    );
  }
}

export default App;
