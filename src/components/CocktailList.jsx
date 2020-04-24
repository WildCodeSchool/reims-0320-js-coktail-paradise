import React from 'react';
import Cocktail from './Cocktail';


function CocktailList({ list }) {
  return (
    <div className="cocktailList">
      { list.map((cocktail) => <Cocktail cocktail={cocktail} />) }
    </div>
  );
}

export default CocktailList;
