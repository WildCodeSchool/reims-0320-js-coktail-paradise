import React from 'react';
import "./CocktailResult.css";

function CocktailResult() {
	return (
		<div className="DivResult">
      <div className="ImageCocktail">
        <img src="https://picsum.photos/120/120" alt="Cocktails"/>
      </div>
      <div className="ResultDescription">
        <h1>MOJITO</h1>
        <div>
          <p><strong>Ingredients</strong> : Limon, Citrus, Vodka</p>
          <p><strong>Ingredients</strong> : Limon, Citrus, Vodka</p>
        </div>
        <button className="buttonCliked">SHOW RECIPE</button>
      </div>
		</div>
	);
}

export default CocktailResult;