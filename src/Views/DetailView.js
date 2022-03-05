import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'

function DetailView(props) {
  const navigate = useNavigate();
  const { recipeID } = useParams();
  var recipe = require('../data/Recipes.json')[recipeID];
  return (
    <div>
        <h1>Rezept: {recipe.name}</h1>
        <p>Dauer: {recipe.duration}</p>
        <ul>
          {recipe.ingredients.map((ing) => <li key={ing} message={ing} >{ing}</li>)}
        </ul>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default DetailView;
