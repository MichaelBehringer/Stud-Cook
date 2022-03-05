import React from "react";
import {useNavigate } from 'react-router-dom'

function SearchView() {
  const navigate = useNavigate();
  var recipes = require('../data/Recipes.json');
  return (
    <div>
        <h1>Suche</h1>
        {recipes.map((recipe) => <button key={recipe.id} onClick={() => navigate('/detail/' + recipe.id)}>{recipe.name}</button>)}
    </div>
  );
}

export default SearchView;
