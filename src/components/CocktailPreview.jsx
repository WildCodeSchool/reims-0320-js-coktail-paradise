import React from 'react';
import Cocktail from './Cocktail';
import './CocktailResult.css';

class CocktailPreview extends React.Component {
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
      <div className='DivResult'>
        <div>
          <img className='ImageCocktail' src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink} />
        </div>
        <div className="ResultDescription">
          <h1 className='titlePreview'>{this.props.cocktail.strDrink}</h1>
          <button className='buttonCliked' type="button" onClick={this.clicked}>Show Cocktail description</button>
        </div>
        <div className={this.state.clicked === true ? 'modaleON' : 'modaleOFF'}>
            <Cocktail clicked={this.clicked} cocktail={this.props.cocktail}/> 
        </div>
      </div>
    );
  }
}

export default CocktailPreview;
