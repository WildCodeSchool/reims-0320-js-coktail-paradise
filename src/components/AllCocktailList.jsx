import React from 'react';
import Cocktail from './Cocktail';

function AllCocktailList({list}) {
    return (
      <div>
        {list.map(cocktail => { ...cocktail } )}
      </div>
    );
  }

export default AllCocktailList;