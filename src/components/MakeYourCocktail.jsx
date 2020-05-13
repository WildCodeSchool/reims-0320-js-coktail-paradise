import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Select from './Select';
import './makeYourCocktail.css';
import './Cocktails.css';
import CocktailList from './CocktailList';
import './home.css';
import BarmanSmall from '../BarmanSmall.jpg';
import WhiteArrow from '../white-arrow.png';

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
              <img src={BarmanSmall} alt="barman-picture" className="barmanPicture" />
              <div className="instruction">
                <h2 className="barmanQuestion">Please choose your ingredients</h2>
              </div>
              <div className="searchBar">
                <Select cocktailListSort={this.cocktailListSort} setKeywords1={this.setKeywords1} setKeywords2={this.setKeywords2} cocktailsList={this.state.allCocktails} ingredientsList={this.state.ingredientsList} onSearch1={this.searchIngredient1} onSearch2={this.searchIngredient2} />
                <p className="paragraph">Number of cocktails: {cocktailNumber} </p>
              </div>
            </div>
            <div className="CocktailResults">
              <CocktailList list={this.state.intersection === undefined ? [''] : this.state.intersection} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeYourCocktail;
