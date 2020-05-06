import React from 'react';
import Cocktail from './Cocktail';
import CocktailPreview from './CocktailPreview';

function CocktailList({ list, errorMessage, errorShow, manageError }) {
  return (
    <div>
      <div className={errorShow === true ? 'errorMessage errorModalBg' : 'hideDescription'}>
        error message {errorMessage}
        <button type="button" onClick={manageError}>ok</button>
      </div>
      <div>
        { list.map((cocktail) => <CocktailPreview cocktail={cocktail} />) }
      </div>
    </div>
    
  );
}

export default CocktailList;
