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
      <div className="flex-container">
        <img alt={recipe.name} src={ require('../images/' + recipe.image) } />
        <div>
        <p>Dauer: {recipe.duration + ' Minuten'}</p>
        <p>Zutaten:</p>
        <ul>
          {recipe.ingredients.map((ing) => <li key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li>)}
        </ul>
      </div>
    </div>
      <p>Vorgehen:</p>
      {recipe.process.map((step) => <p key={step}>{step}</p>)}
      <button onClick={() => addToLocalStorage(recipeID)}>Zur Einkaufsliste hinzufuegen</button>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default DetailView;