import React from 'react';
import "./CocktailResult.css";


class CocktailPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div className="DivResult">
      <div className="ImageCocktail">
        <img src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink}/>
      </div>
      <div className="ResultDescription">
        <h1>{this.props.cocktail.strDrink}</h1>
        <button type="button" onClick={() => this.setState({ clicked: !this.state.clicked})} >Show cocktail</button>
      </div>
      <div className={this.state.clicked === true ? 'show' : 'hiddend'}>
        <Cocktail cocktail={this.props.cocktail}/>
      </div>
		</div>
    )
  }
}

export default CocktailPrev;