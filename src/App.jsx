import React from 'react';
import NavBar from './components/NavBar';
import RandomCocktail from './components/RandomCocktail';
import PopupAge from './components/PopupAge';
import './components/popupAge.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeYourCocktail from "./components/MakeYourCocktail";
import Home from "./components/Home";
import ChooseYourCocktail from "./components/ChooseYourCocktail";
import './components/popupAge.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: true,
      cocktails: [],
      allCocktails: [],
      ingredientsList: [],
      keywords1: null,
      keywords2: null,
      intersection: [],
    };
  }

  

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  }

  exitSite = () => {
    window.history.back();
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.keywords1 !== prevState.keywords1) {
      this.searchIngredient1();
    }
    if (this.state.keywords2 !== prevState.keywords2) {
      this.searchIngredient2();
    }
  }

  setKeywords1 = (keywords1) => this.setState({ keywords1 });

  setKeywords2 = (keywords2) => this.setState({ keywords2 });


  searchIngredient1 = () => {
    const { keywords1 } = this.state;
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keywords1 !== undefined ? keywords1 : ''}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktails1: data.drinks });
      });
  }

  searchIngredient2 = () => {
    const { keywords2 } = this.state;
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keywords2 !== undefined ? keywords2 : ''} `)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktails2: data.drinks });
      });
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
      let { allCocktails } = this.state;
      let { ingredientsList } = this.state;

      responses.forEach((response) => {
        const { data } = response;
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

        if (data.drinks != null) {
          allCocktails = [...allCocktails, ...data.drinks];
        }
      });

      this.setState({
        ingredientsList,
        allCocktails,
      });
    }));
  };

  cocktailListSort = (cocktail) => {
    this.setState({ intersection: cocktail });
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.showPopup
          && <PopupAge closePopupEnter={this.togglePopup} closePopupExit={this.exitSite} /> }
        </div>
        <Switch>
          <Route path="/cocktails/random">
            <RandomCocktail />
          </Route>
          <Route path="/cocktails/create">
            <MakeYourCocktail intersection={this.state.intersection} cocktailListSort={this.cocktailListSort} setKeywords1={this.setKeywords1} setKeywords2={this.setKeywords2} cocktailList={this.state.allCocktails} ingredientsList={this.state.ingredientsList} onSearch1={this.searchIngredient1} onSearch2={this.searchIngredient2} />
          </Route>
          <Route path="/cocktails">
            <ChooseYourCocktail cocktailList={this.state.allCocktails} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
