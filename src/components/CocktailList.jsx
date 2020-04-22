import React from 'react';
import Cocktail from './Cocktail';


function CocktailList({list}) {
  return (
    <div className="cocktailTable">
      {list.map((cocktail) => {return <Cocktail cocktail={cocktail}/>})}
    </div>
  );
}
export default CocktailList;
