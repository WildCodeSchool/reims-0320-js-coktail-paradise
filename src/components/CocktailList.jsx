import React from 'react';
import Cocktail from './Cocktail';


function CocktailList({ list, errorMessage }) {
  return (
    <div>
      <div className="errorMessage">error message {errorMessage}</div>
      <div className="cocktailList">
        { list.map((cocktail) => <Cocktail cocktail={cocktail} />) }
      </div>
    </div>
    
  );
}

export default CocktailList;
