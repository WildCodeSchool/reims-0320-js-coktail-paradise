import React from 'react';
import Select from './Select';
import './makeYourCocktail.css';
import './Cocktails.css';
import CocktailList from './CocktailList';
import { Link } from "react-router-dom";
import './home.css';
import BarmanSmall from '../BarmanSmall.jpg';
import Arrow from '../Arrow.png';


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
                <Select cocktailListSort={this.props.cocktailListSort} setKeywords1={this.props.setKeywords1} setKeywords2={this.props.setKeywords2} cocktailList={this.props.cocktailList} ingredientsList={this.props.ingredientsList} onSearch1={this.props.searchIngredient1} onSearch2={this.props.searchIngredient2} />
                <p className="paragraph">Number of cocktails: {cocktailNumber} </p>
              </div>
              {cocktailNumber != 0 ? (
                <div className="arrow-container">
                  <img className="arrow-anim" src={Arrow}/>
                </div>
              ) : ''}
              <div className="CocktailResults">
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