import React from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'

function addToLocalStorage(recipeID) {
  let stringShoppingList = localStorage.getItem('shoppingList')
  if(stringShoppingList) {
    let shoppingList = JSON.parse(stringShoppingList).shoppingList
    shoppingList.push(parseInt(recipeID))
    localStorage.setItem('shoppingList', JSON.stringify({shoppingList: shoppingList}))
  } else {
    localStorage.setItem('shoppingList', JSON.stringify({shoppingList: [parseInt(recipeID)]}))
  }
}

function DetailView(props) {
  const navigate = useNavigate();
  const { recipeID } = useParams();
  var recipe = require('../data/Recipes.json')[recipeID];
  return (
    <div className="card cardMain">
        <h1>Rezept: {recipe.name}</h1>
        <img alt={recipe.name} src={ require('../images/' + recipe.image) } />
        <p>Dauer: {recipe.duration}</p>
        <p>Zutaten:</p>
        <ul>
          {recipe.ingredients.map((ing) => <li key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li>)}
        </ul>
      
      <p>Vorgehen:</p>
      <p>{recipe.process}</p>
      <button onClick={() => addToLocalStorage(recipeID)}>Zur Einkaufsliste hinzufuegen</button>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default DetailView;
