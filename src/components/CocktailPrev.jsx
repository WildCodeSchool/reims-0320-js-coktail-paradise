import React from 'react';
import './Cocktails.css'
import './makeYourCocktail.css';
import Axios from 'axios';
import Cocktail from './Cocktail';

class CocktailPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cocktailDescription: '',
    };
  }

  

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  

  render() {
    return (
      <div>
        <img className="cocktailThumb" src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink} />
        <div>
            {this.props.cocktail.strDrink}
        </div>
        <button type="button" onClick={this.clicked}>Show Cocktail description</button>
        <div className={this.state.clicked === true ? 'modaleON' : 'modaleOFF'}>
            <Cocktail clicked={this.clicked} cocktail={this.props.cocktail}/> 
        </div>
      </div>
    );
  }
}

export default CocktailPrev;
