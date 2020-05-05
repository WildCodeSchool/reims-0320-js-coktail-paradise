import React from 'react';

const Select = ({ list }) => (
  <div>
    <label htmlFor="ingredient-select" />
    <select name="ingredients" id="ingredient-select">
      <option value="">--Please choose your ingredient</option>
      {list.map((ingredient) => <option value={ingredient}>{ingredient}</option>) }
    </select>
  </div>
);

export default Select;
