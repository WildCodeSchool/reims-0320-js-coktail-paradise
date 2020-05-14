import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CocktailPreview from "./CocktailPreview";
import './makeYourCocktail.css';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ChooseYourCocktail({ cocktailList }) {
  const query = useQuery();
  const page = parseInt((query.get('page') ?? 1), 10);
  const pageSize = 3;
  const cocktailListLength = Math.ceil(cocktailList.length / 3);
  console.log(cocktailListLength);

  return (
    <div className="choseCocktailGlobal"> 
      <div>
        <Link className="homeButton" to="/">X</Link>
      </div>
      <div>Chose your cocktail !</div>
      <div className="listChoseCocktail">
        {cocktailList.slice((page - 1) * pageSize, page * pageSize).map((cocktail) => <CocktailPreview cocktail={cocktail} />)}
      </div>
      <div className="navPageDisplay">
        {page > 1 ? <Link to={`?page=${page - 1}`} className="navPages">&lt;</Link> : ''}
        <div className="navPages">{page}</div>
        {page < cocktailListLength ? <Link to={`?page=${page + 1}`} className="navPages">&gt;</Link> : ''}
      </div>
      </div>
  );
}


export default ChooseYourCocktail;