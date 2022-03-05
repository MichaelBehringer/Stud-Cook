import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'
import { readComment, addComment } from "../functions/Firebase";
import { addToLocalStorage } from "../functions/LocalStorage";
import {v4} from 'uuid';

function generateCommentArray(comments) {
  let commentArray = []
  for(let key in comments) {
    let value = comments[key];
    commentArray.push([key, value]);
  }
  return commentArray;
}

function saveComment(recipeID, comments, setComments) {
  const newID = v4();
  const comment = document.getElementById("inputComment").value;
  addComment(recipeID, comment, newID);
  setComments({...comments, [newID]: comment})
  document.getElementById("inputComment").value = ''
}

function DetailView(props) {
  const [comments, setComments] = useState({})

  const navigate = useNavigate();
  const { recipeID } = useParams();
  var recipe = require('../data/Recipes.json')[recipeID];

  useEffect(() => {
    readComment(recipeID).then(comm=>setComments(comm))
    // eslint-disable-next-line
  }, []);

  return (
    <div>
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
      <div className="card cardMain">
        <h1>Kommentare:</h1>
        {comments ? generateCommentArray(comments).map((entry) => <p className="card cardMain" key={entry[0]}>{entry[1]}</p>) : <p>Keine Kommentare vorhanden</p>}
        <span>Kommentar: </span>
        <input id="inputComment" type="text" />
        <button onClick={() => saveComment(recipeID, comments, setComments)}>Speichern</button>
      </div>
    </div>
  );
}

export default DetailView;