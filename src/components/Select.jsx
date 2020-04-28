import React from 'react';

const Select = () => (
  <div>
    <label htmlFor="ingredient-select" />
    <select name="ingredients" id="ingredient-select">
      <option value="">--Please choose your ingredient</option>
      <option value="">{}</option>
    </select>
  </div>
);

export default Select;
