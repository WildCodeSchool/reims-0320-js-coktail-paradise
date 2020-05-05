import React from 'react';

class Select extends React.Component {

  seachInput1 = (event) => {
    this.props.setKeywords1(event.target.value);
  }

  seachInput2 = (event) => {
    this.props.setKeywords2(event.target.value);
  }


  render() {
    return(
      <div>
      <div>
        <label htmlFor="ingredient-select" />
        <select name="ingredients1" id="ingredient1-select" onChange={(event) => this.seachInput1(event)}>
          <option value="">--Please choose your ingredient</option>
          {this.props.list.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
        </select>
      </div>
      <div>
        <label htmlFor="ingredient-select" />
        <select name="ingredients2" id="ingredient2-select" onChange={(event) => this.seachInput2(event)}>
          <option value="">--Please choose your ingredient</option>
          {this.props.list.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
        </select>
      </div>
    </div>
    )
  }
}

export default Select;
