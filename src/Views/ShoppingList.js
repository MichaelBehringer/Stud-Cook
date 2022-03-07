import React from "react";
import "./ShoppingList.css";
import jsPDF from "jspdf"
import logo from "../images/name.png"

function pdfGenerate(){
  var doc = new jsPDF("portrait")
  doc.addImage(logo, "PNG", 0, 0, 100, 20);
  doc.text("\n \n \n Test Text", 10, 10)
  doc.save("Einkaufsliste.pdf")
}

function ShoppingList() {
  var recipes = require('../data/Recipes.json');
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let stringShoppingList = localStorage.getItem('shoppingList')
  return (
    <div className="card cardMain">
      <h1>Einkaufsliste</h1>
      {stringShoppingList ?
        <div>
          <ul>
            {recipes.map((recipe) => {
              if (JSON.parse(stringShoppingList).shoppingList.includes(recipe.id)) {
                return recipe.ingredients.map((ing) => <div className="backForListForInt"> <li className="listForInt" key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li></div>)
              }})}

          </ul>
        </div>
        :
        <div>
          <h1>Einkaufsliste ist leer</h1>
        </div>
      }
      <div style={{ textAlign: "center" }}>
        <button className="prettybutton" onClick={() => { localStorage.removeItem('shoppingList'); forceUpdate() }}>Einkaufsliste leeren</button>
        <br></br>
        <button className="prettybutton" onClick={pdfGenerate}>PDF TEST</button>
      </div>
    </div>
  );
}

export default ShoppingList;
