import React, {useState, useEffect} from "react";
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {EmailIcon, EmailShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";
import {generateCommentArray, toggleWriteComment} from "../functions/CommentFunctions";
import {readComment} from "../functions/Firebase";
import {addToLocalStorage} from "../functions/LocalStorage";
import {getNextRecipe, getPreviousRecipe, getRecipeForID} from "../functions/RecipesFunctions";
import 'react-toastify/dist/ReactToastify.css';

function DetailView() {
  const [comments, setComments] = useState({});
  const navigate = useNavigate();
  const {recipeID} = useParams();
  var recipe = getRecipeForID(recipeID);

  useEffect(() => {
    readComment(recipeID).then(comm => setComments(comm));
  }, [recipeID]);

  return (
    <div>
      <div className="card cardMain">
        <div className="recipeName">
          <h1>{recipe.name}</h1>
        </div>

        <div className="flex-container">
          <img className="foodIMG" alt={recipe.name} src={require('../images/' + recipe.image)} />
          <div>
            <h2>Zutaten</h2>
            <table className="ingTable"><tbody>
              {recipe.ingredients.map((ing) => <tr key={ing.name} message={ing.name} >{<><td className="tdIngScale">{ing.amounth + ' ' + ing.scale}</td><td className="tdIngName">{ing.name}</td></>}</tr>)}
            </tbody></table>
            <h2>Zubereitungszeit</h2><p>{recipe.duration} Minuten</p>
          </div>
        </div>
        <h2>Zubereitung</h2>
        {recipe.process.map((step) => <p className="textJustify" key={step}>{step}</p>)}
        <button className="colorThemeButton addToShoppingListButton" onClick={() => addToLocalStorage(recipeID)}>Zur Einkaufsliste hinzufügen</button>
        <WhatsappShareButton className="shareButtons" url={window.location.href}>
          <WhatsappIcon size={35} round={true} />
        </WhatsappShareButton>
        <EmailShareButton subject="Leckeres Rezept" className="shareButtons" url={window.location.href}>
          <EmailIcon size={35} round={true} />
        </EmailShareButton>
      </div>

      <div className="blockerSmall" />

      <div className="card cardMain">
        <h1>Kommentare:</h1>
        <input id="inputComment" className="commentInputStyle"></input>
        <button onClick={() => toggleWriteComment(recipeID, comments, setComments)} className="colorThemeButton addCommentButton">✎ Kommentar schreiben</button>
        {comments ? generateCommentArray(comments).map((entry) => <p className="card cardComment textJustify" key={entry[0]}>{entry[1]}</p>) : <p>Keine Kommentare vorhanden</p>}
      </div>

      <button onClick={() => navigate('/detail/' + getNextRecipe(recipeID).id)} className="paginationButton paginationButtonNext">&#62;</button>
      <button onClick={() => navigate('/detail/' + getPreviousRecipe(recipeID).id)} className="paginationButton">&#60;</button>
    </div>
  );
}

export default DetailView;