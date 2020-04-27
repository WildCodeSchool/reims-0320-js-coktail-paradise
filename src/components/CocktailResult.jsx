import React from 'react';
import "./CocktailResult.css";

function CocktailResult() {
	return (
		<div className="DivResult">
      <div className="ImageCocktail">
        <img src="https://picsum.photos/125/125" alt=""/>
      </div>
      <div className="ResultDescription">
        <h1>MOJITO</h1>
        <p>Ingredient : Limon, Citrus, Vodka</p>
        <p>Ingredient : Limon, Citrus, Vodka</p>
        <button className="buttonCliked">Show Cocktails</button>
      </div>
		</div>
	);
}

export default CocktailResult;