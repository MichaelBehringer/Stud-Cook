import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'
import {EmailIcon, EmailShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";
import { readComment, addComment } from "../functions/Firebase";
import { addToLocalStorage } from "../functions/LocalStorage";
import { getNextRecipe, getPreviousRecipe, getRecipeForID } from "../functions/RecipesFunctions";

function sortFunction(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}

function generateCommentArray(comments) {
  let commentArray = []
  for(let key in comments) {
    let value = comments[key];
    commentArray.push([key, value]);
  }
  commentArray.sort(sortFunction);
  return commentArray;
}

function toggleWriteComment(recipeID, comments, setComments) {
  const enteredComment = prompt('Kommentar eingeben:');
  if (enteredComment === null) {
    return;
  }
  saveComment(recipeID, comments, setComments, enteredComment);
}

function saveComment(recipeID, comments, setComments, comment) {
  const newID = Date.now();
  addComment(recipeID, comment, newID);
  setComments({...comments, [newID]: comment})
  document.getElementById("inputComment").value = ''
}

function DetailView() {
  const [comments, setComments] = useState({})

  const navigate = useNavigate();
  const { recipeID } = useParams();
  var recipe = getRecipeForID(recipeID);

  useEffect(() => {
    readComment(recipeID).then(comm=>setComments(comm))
  }, [recipeID]);

  return (
    <div>
      <div className="card cardMain">
      <button className="backButton" onClick={() => navigate('/detail/' + getNextRecipe(recipeID).id)}>&#62;</button>
      <button className="backButton" onClick={() => navigate('/detail/' + getPreviousRecipe(recipeID).id)}>&#60;</button>
        <h1>{recipe.name}</h1>
        <div className="flex-container">
          <img className="foodIMG" alt={recipe.name} src={ require('../images/' + recipe.image) } />
          <div>
            <h2>Zutaten</h2>
            <ul>
              {recipe.ingredients.map((ing) => <li key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li>)}
            </ul>
            <h2>Zubereitungszeit</h2><p>{recipe.duration} Minuten</p>
          </div>
        </div>
        <h2>Zubereitung</h2>
        {recipe.process.map((step) => <p className="textJustify" key={step}>{step}</p>)}
        <button className="colorThemeButton addToShoppingListButton" onClick={() => addToLocalStorage(recipeID)}>Zur Einkaufsliste hinzufügen</button>
        <WhatsappShareButton className="shareButtons" url="http://localhost:3000/#/">
          <WhatsappIcon size={35} round={true}/> 
        </WhatsappShareButton>
        <EmailShareButton className="shareButtons" url="http://localhost:3000/#/">
          <EmailIcon size={35} round={true}/> 
        </EmailShareButton>
        
      </div>
      <div className="card cardMain">
        <h1>Kommentare:</h1>
        <div className="addCommentButton">
        <button onClick={() => toggleWriteComment(recipeID, comments, setComments)} className="colorThemeButton">✎ Kommentar schreiben</button>
        </div>
        {comments ? generateCommentArray(comments).map((entry) => <p className="card cardComment textJustify" key={entry[0]}>{entry[1]}</p>) : <p>Keine Kommentare vorhanden</p>}
      </div>
    </div>
  );
}

export default DetailView;