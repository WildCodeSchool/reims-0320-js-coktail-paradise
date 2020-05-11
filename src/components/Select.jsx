import React from 'react';
import {
  Label,
  Input,
  FormGroup
} from "reactstrap";
import './makeYourCocktail.css';

class Select extends React.Component {

  seachInput1 = (event) => {
    this.props.setKeywords1(event.target.value);
  }

  seachInput2 = (event) => {
    this.props.setKeywords2(event.target.value);
  }


  render() {
    return (
      <div className="flexSearchBar">
        <div>
          <p>Ingredient 1</p>
          <FormGroup>
            <Label htmlFor="ingredient-select" />
            <Input type="select" className='SelectOption' name="ingredients1" id="ingredient1-select" onChange={(event) => this.seachInput1(event)}>
              <option value="">--Please choose your ingredient</option>
              {this.props.list.map((ingredient) => <option value={ingredient}>{ingredient}</option>)}
            </Input>
          </FormGroup>
        </div>
        <div>
          <p>Ingredient 2</p>
          <FormGroup>
            <Label htmlFor="ingredient-select" />
            <Input type="select" className='SelectOption' name="ingredients2" id="ingredient2-select" onChange={(event) => this.seachInput2(event)}>
              <option value="">--Please choose your ingredient</option>
              {this.props.list.map((ingredient) => <option value={ingredient}>{ingredient}</option>)}
            </Input>
          </FormGroup>
        </div>
      </div>
    )
  }
}

export default Select;
