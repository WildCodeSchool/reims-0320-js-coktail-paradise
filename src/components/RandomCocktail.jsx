import React from 'react';
import Axios from 'axios';
class RandomCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCocktail: [],
    };
  }

  componentDidMount() {
    this.searchRandomCocktail();
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
      <div>
        <div className="randomCoctail">
          <h1> Your Random Cocktail </h1>
          <div>
            <img src={this.state.randomCocktail.strDrinkThumb}
              alt={this.state.randomCocktail.strDrink}
            />
          </div>
          <h2>{this.state.randomCocktail.strDrink}</h2>
          <div>
            <h3>Ingredient:</h3>
            <ul>
              <li>{this.state.randomCocktail.strIngredient1}</li>
              <li>{this.state.randomCocktail.strIngredient2}</li>
              <li>{this.state.randomCocktail.strIngredient3}</li>
              <li>{this.state.randomCocktail.strIngredient4}</li>
              <li>{this.state.randomCocktail.strIngredient5}</li>
              <li>{this.state.randomCocktail.strIngredient6}</li>
              <li>{this.state.randomCocktail.strIngredient7}</li>
              <li>{this.state.randomCocktail.strIngredient8}</li>
              <li>{this.state.randomCocktail.strIngredient9}</li>
              <li>{this.state.randomCocktail.strIngredient10}</li>
              <li>{this.state.randomCocktail.strIngredient11}</li>
              <li>{this.state.randomCocktail.strIngredient12}</li>
              <li>{this.state.randomCocktail.strIngredient13}</li>
              <li>{this.state.randomCocktail.strIngredient14}</li>
              <li>{this.state.randomCocktail.strIngredient15}</li>
            </ul>
          </div>
          <div>
            <h3> Instructions </h3>
            <p>{this.state.randomCocktail.strInstructions}</p>
          </div>
          <button type="button" onClick={this.searchRandomCocktail}>new random cocktail</button>
        </div>
      </div>
    );
  }
}
export default RandomCocktail;
