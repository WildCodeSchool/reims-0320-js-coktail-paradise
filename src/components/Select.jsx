import React from 'react';

const Select = ({  }) => (
  <label for="ingredient-select">Choose your ingredient</label>
  <select name="ingredients" id="ingredient-select">
    <option value="">--Please choose your ingredient</option>
    <option value=""></option>
  </select>
);

export default Select;

//onChange={(event) => setText(event.target.value)} type="text"
