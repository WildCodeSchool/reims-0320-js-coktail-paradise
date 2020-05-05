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
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.data)
      .then((data) => {
        this.setState({ randomCocktail: data.drinks[0].strDrink });
      });
  }

  render() {
    return (
      <div className="randomCoctail">
        <h1> Your Random Cocktail </h1>
        <this.state.randomCocktail/>
      </div>
    );
  }
}
export default RandomCocktail;
