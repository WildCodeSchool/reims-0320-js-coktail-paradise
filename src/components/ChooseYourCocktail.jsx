import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CocktailPreview from "./CocktailPreview";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ChooseYourCocktail({ cocktailList }) {
  const query = useQuery();
  const page = parseInt(query.get('page'), 10);
  const pageSize = 3;
  return (
    <div>
      <div>
          <Link className="homeButton" to="/">X</Link>
      </div>
      <div>There is a cocktail list</div>
      {cocktailList.slice((page - 1) * pageSize, page * pageSize).map((cocktail) => <CocktailPreview cocktail={cocktail} />)}
      
    </div>
  );
}


export default ChooseYourCocktail;