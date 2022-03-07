import React from "react";
import {useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  var recipes = require('../data/Recipes.json');
  return (
    <div>
      <div className="card cardMain">
        <h1>Suche</h1>
        {recipes.map((recipe) => <button key={recipe.id} onClick={() => navigate('/detail/' + recipe.id)}>{recipe.name}</button>)}
      </div>
    </div>
  );
}

export default Search;
