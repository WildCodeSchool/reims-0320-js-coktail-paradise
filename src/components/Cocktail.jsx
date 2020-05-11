import React from 'react';
import './Cocktails.css'
import './makeYourCocktail.css';
import "./CocktailDescription.css";
import Axios from 'axios';

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailDescription: '',
    };
  }

  componentDidMount() {
    this.description();
  }

  description = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktail.idDrink}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktailDescription: data.drinks[0] });
      });
  }

  render() {
    return (
      <div className='modalDisplay'>
        <div className='ContainersCocktails'>
          <div className='ImageAndIngredients'>
            <div>
              <img className="cocktailThumb" src={this.state.cocktailDescription.strDrinkThumb} alt={this.state.cocktailDescription.strDrink} />
            </div>
            <div className='TextDescription'>
              <h1>{this.state.cocktailDescription.strDrink}</h1>
              <h2>Ingredients :</h2>
              <ul>
                <li>{this.state.cocktailDescription.strIngredient1}</li>
                <li>{this.state.cocktailDescription.strIngredient2}</li>
                <li>{this.state.cocktailDescription.strIngredient3}</li>
                <li>{this.state.cocktailDescription.strIngredient4}</li>
                <li>{this.state.cocktailDescription.strIngredient5}</li>
              </ul>
            </div>
          </div>
          <div className='RecipeAndButton'>
            <div className='DivRecipe'>
              <h2>Recipe :</h2>
              <p>{this.state.cocktailDescription.strInstructions}</p>
            </div>
            <div className='DivBackButton'>
              <button className='buttonClikedBack' type='button' onClick={() => this.props.clicked()}>Return</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cocktail;
