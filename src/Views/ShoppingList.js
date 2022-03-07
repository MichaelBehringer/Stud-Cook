import React from "react";
import "./ShoppingList.css";

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +

    encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
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
            {recipes.map((recipe) =>
              {
                if (JSON.parse(stringShoppingList).shoppingList.includes(recipe.id)) {
                  return recipe.ingredients.map((ing) => <div className="backForListForInt"> <li className="listForInt" key={ing.name} message={ing.name} >{ing.name + ' ' + ing.amounth + ing.scale}</li></div>)
                
                }
                
              }
            )
            }

          </ul>
        </div>
        :
        <div>
          <h1>Einkaufsliste ist leer</h1>
        </div>
      }
      <button className="prettybutton" onClick={() => { localStorage.removeItem('shoppingList'); forceUpdate() }}>Einkaufsliste leeren</button>

    </div>
  );
}

export default ShoppingList;
