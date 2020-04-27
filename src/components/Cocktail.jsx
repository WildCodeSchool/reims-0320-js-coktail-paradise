import React from 'react';
import './Cocktails.css'


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
      <div className={this.state.clicked? 'cocktailDescriptionOn' : ''}>
        <button type="button" onClick={this.clicked} className={this.state.clicked? 'butonCliked' : 'cocktails'}>
          {this.props.cocktail.strDrink}
        </button>
        <div className={this.state.clicked? 'showDescriptionOn' : 'hideDescription'}>
          <div>
            
          </div>
          <img className="cocktailThumb" src={this.props.cocktail.strDrinkThumb} alt = {this.props.cocktail.strDrink}/>
        </div>
      </div>
    );
  }
}

export default Cocktail;
