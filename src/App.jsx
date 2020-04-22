import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
import CocktailList from './components/CocktailList'


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
      this.setState({ cocktails: data.drinks });
    });
}

render() {
  return (
    <div>
      <div className="makeYourCocktail">
        <div className="searchBar">
          <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
        </div>
        <div>
          <CocktailList list={this.state.cocktails} />
        </div>
      </div>
      <div>
        <button>Beta</button>
        <AllCocktailList list={this.state.AllCocktailList} />
      </div>
    </div>

  );
}
}

export default App;
