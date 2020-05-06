import React from 'react';
import "./CocktailResult.css";

const ButtonShow = ({ onClick }) => (
  <button className='buttonCliked' onClick={onClick} type="button">
    Show me cocktails!
  </button>
);

export default ButtonShow;