import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MakeYourCocktail from "./components/MakeYourCocktail";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cocktails/create">
            <MakeYourCocktail />
          </Route>
          <Route path="/cocktails">
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

export default App;
