import React from 'react';
import Cocktail from './Cocktail';
import CocktailPrev from './CocktailPrev';

function CocktailList({ list, errorMessage, errorShow, manageError }) {
  return (
    <div>
      <div className={errorShow === true ? 'errorMessage errorModalBg' : 'hideDescription'}>
        error message {errorMessage}
        <button type="button" onClick={manageError}>ok</button>
      </div>
      <div className="cocktailList">
        { list.map((cocktail) => <CocktailPrev cocktail={cocktail} />) }
      </div>
    </div>
    
  );
}

export default CocktailList;
