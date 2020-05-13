import React from 'react';
import Select from './Select';
import './makeYourCocktail.css';
import './Cocktails.css';
import CocktailList from './CocktailList';
import { Link } from "react-router-dom";
import './home.css';


class MakeYourCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showYourCocktails: true,
      showDescription: true,
    };
  }

  render() {
    const cocktailNumber = this.props.intersection.length;
    return (
      <div>
        <Link className="homeButton" to="/">
          X
        </Link>
        <div>
          <div className="text">
            <div className="makeYourCocktail">
              <div className="searchBar">
                <h2>Yours ingredients !</h2>
                <Select cocktailListSort={this.props.cocktailListSort} setKeywords1={this.props.setKeywords1} setKeywords2={this.props.setKeywords2} cocktailList={this.props.cocktailList} ingredientsList={this.props.ingredientsList} onSearch1={this.props.searchIngredient1} onSearch2={this.props.searchIngredient2} />
              </div>
              <div>
                <p>Number of cocktails: {cocktailNumber} </p>
                <CocktailList list={this.props.intersection === undefined ? [''] : this.props.intersection} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeYourCocktail;