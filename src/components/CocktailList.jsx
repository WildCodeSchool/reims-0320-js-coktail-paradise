import React from 'react';
import CocktailPreview from './CocktailPreview';

function CocktailList({ list, errorMessage, errorShow, manageError }) {
  return (
    <div>
      <div>
        {list.map((cocktail) => <CocktailPreview cocktail={cocktail} />) }
      </div>
    </div>
  );
}

export default CocktailList;
