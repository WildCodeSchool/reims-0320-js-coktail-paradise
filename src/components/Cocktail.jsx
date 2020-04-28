import React from 'react';
import './Cocktails.css'
import './makeYourCocktail.css';
import Axios from 'axios';

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cocktailDescription: '',
    };
  }

  componentDidMount() {
    this.description();
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  description = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktail.idDrink}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktailDescription: data.drinks[0].strInstructions });
      });
  }

  render() {
    return (
      <div className={this.state.clicked? 'cocktailDescriptionOn' : ''}>
        <button type="button" onClick={this.clicked} className={this.state.clicked? 'butonCliked' : 'cocktails'}>
          {this.props.cocktail.strDrink}
        </button>
        <div className={this.state.clicked? 'showDescriptionOn' : 'hideDescription'}>
          <div>
            <h1>  {this.state.cocktailDescription} </h1>
            <img className="cocktailThumb" src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cocktail;
