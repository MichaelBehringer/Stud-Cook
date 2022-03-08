import React from "react";
import "./ShoppingList.css";
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
          <ul>
            {recipes.map((recipe) => {
              if (JSON.parse(stringShoppingList).shoppingList.includes(recipe.id)) {
                recipe.ingredients.map((ing) => pdfInt.push(ing.name + ' ' + ing.amounth + ing.scale))
                console.log(pdfInt)
                return recipe.ingredients.map((ing) => <li className="listForInt" key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li>)
              }})}

          </ul>
        </div>
        :
        <div>
          <h1>Einkaufsliste ist leer</h1>
        </div>
      }
      <div>
        <button className="colorThemeButton marginTopButtonTemp" onClick={() => pdfGenerate(pdfInt.join('\n'))}>Einkaufsliste als PDF herunterladen</button>
      </div>
    </div>
  );
}


export default ShoppingList;
