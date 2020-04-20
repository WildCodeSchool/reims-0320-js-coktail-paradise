import React from 'react';


class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="classCocktail">
        <button type="button" onClick={this.clicked} className={this.state.clicked? 'cocktailsClicked' : 'cocktails'}>
          {this.props.cocktail.strDrink}
        </button>
        <div className={this.state.clicked? 'cocktailDescriptionOn' : 'cocktailDescriptionOff'}>
          <div>
            description blablabla
          </div>
          <img src={this.props.cocktail.strDrinkThumb} alt = 'il devrai y avoir une image ici'/>
        </div>
      </div>
    );
  }
}

export default Cocktail;
