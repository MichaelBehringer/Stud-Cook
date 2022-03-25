/* eslint array-callback-return: 0 */

import React from "react";
import jsPDF from "jspdf"
import logo from "../images/name.png"

function pdfGenerate(inputText){
  var doc = new jsPDF("portrait")
  doc.addImage(logo, "PNG", 0, 0, 100, 20);
  doc.text(inputText, 10, 30)
  doc.save("Einkaufsliste.pdf")
}

function ShoppingList() {
  let pdfInt=[]
  var recipes = require('../data/Recipes.json');
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let stringShoppingList = localStorage.getItem('shoppingList')
  return (
    <div className="card cardMain">
      <h1>Einkaufsliste<button className="colorThemeDeleteButton" onClick={() => { localStorage.removeItem('shoppingList'); forceUpdate() }}>Einkaufsliste löschen 🗑</button></h1>
      {stringShoppingList ?
        <div>
          <table><tbody>
            {/*recipes.map((recipe) => {
                if (JSON.parse(stringShoppingList).shoppingList.includes(recipe.id)) {
                recipe.ingredients.map((ing) => pdfInt.push(ing.amounth + ing.scale+' '+ing.name))
                return recipe.ingredients.map((ing) => <tr className="listForInt" key={ing.name} message={ing.name} >{<><td>{ing.amounth + ' ' + ing.scale}</td><td>{ing.name}</td></>}</tr>)
              }})*/}
              {
                'todo ^^'
              }

          </tbody></table>
        </div>
        :
        <div>
          <h2>Einkaufsliste ist leer</h2>
        </div>
      }
      <div>
        <button className="colorThemeButton marginTopButtonTemp" onClick={() => pdfGenerate(pdfInt.join('\n'))}>Einkaufsliste als PDF herunterladen ↓</button>
        
        <form action="https://formsubmit.co/stud.cook.dhbw@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Einkaufsliste"></input>
          <input type="hidden" name="_next" value={window.location.href.replace('shoppingList', 'emailSent')}></input>
          <input type="hidden" name="_template" value="box"></input>
          <button className="colorThemeButton marginTopButtonTemp" type="submit">Einkaufsliste per Email erhalten</button> <br></br>
          <input className="colorThemeButton marginTopButtonTemp" type="email" name="email" placeholder="Email Addresse eingeben" required></input>
          <input type="hidden" name="_autoresponse" value="Hier ist deine einkaufsliste"></input>
          <input type="hidden" name="Einkaufsliste" value={pdfInt.join('\n')}></input>
        </form> 
      </div>
    </div>
  );
}


export default ShoppingList;
