import React from 'react';
import Cocktail from './Cocktail';


function CocktailList({liste}) {
  return (
    <div className="cocktailList">
      {liste.map((cocktail) => {return <Cocktail cocktail={cocktail}/>})}
    </div>
  );
}
export default CocktailList;
