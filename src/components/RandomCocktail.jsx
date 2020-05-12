import React from 'react';
import Axios from 'axios';
import './randomCocktail.css';
import { Link } from 'react-router-dom';
import './home.css';

class RandomCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCocktail: [],
    };
  }

  componentDidMount() {
    this.searchRandomCocktail();
    {console.log(this.state.randomCocktail)}
  }

  searchRandomCocktail = () => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.data)
      .then((data) => {
        this.setState({ randomCocktail: data.drinks[0] });
      });
  }

  render() {
    return (
      <div className="randomCoctail">
        <div>
          <Link className="homeButton" to="/">X</Link>
        </div>
        <img className="randomCocktail-img"
          src={this.state.randomCocktail.strDrinkThumb}
          alt={this.state.randomCocktail.strDrink}
        />
        <div className="randomCoctail-title">
          <h1> Your Random Cocktail: </h1>
          <h2>{this.state.randomCocktail.strDrink}</h2>
        </div>
        <div className="randomCoctail-ingredients">
          <h3>Ingredient:</h3>
          <ul>
            {Object.keys(this.state.randomCocktail).filter(
              (key) => key.startsWith('strIngredient') && this.state.randomCocktail[key] != null,
            ).map(
              (strIngredient) => <li>{this.state.randomCocktail[strIngredient]}</li>,
            )}
          </ul>
        </div>
        <div className="randomCoctail-instruction">
          <h3> Instructions </h3>
          <p>{this.state.randomCocktail.strInstructions}</p>
        </div>
        <div className="randomCoctail-button">
          <button type="button" onClick={this.searchRandomCocktail}>new random cocktail</button>
        </div>
      </div>
    );
  }
}
export default RandomCocktail;
