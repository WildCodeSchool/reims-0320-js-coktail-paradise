import React from 'react';
import NavBar from './components/NavBar';
import CocktailResult from './components/CocktailResult';
import CocktailDescription from './components/CocktailDescription';
import RandomCocktail from './components/RandomCocktail';
import PopupAge from './components/PopupAge';
import './components/popupAge.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeYourCocktail from "./components/MakeYourCocktail";
import Home from "./components/Home";
import ChooseYourCocktail from  "./components/ChooseYourCocktail"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cocktails/create">
            <MakeYourCocktail />
          </Route>
          <Route path="/cocktails">
            <ChooseYourCocktail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cocktails/random">
            < RandomCocktail/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

