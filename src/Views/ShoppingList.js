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
  var recipe = require('../data/Recipes.json');
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let stringShoppingList = localStorage.getItem('shoppingList')
  return (
    <div>
      <h1>Einkaufsliste</h1>
      {stringShoppingList ? 
      <div>
        <ul>
          {JSON.parse(stringShoppingList).shoppingList.map((id) => <li key={id} message={id} >{id}</li>)}
          for (let countOfRecepies = 0; countOfRecepies <; countOfRecepies++) {
            {if(key = recipe[countOfRecepies].id){
              console.log("Succ")
            }}
          }
        </ul>
      </div>
      :
      <div>
        <h1>Einkaufsliste ist leer</h1>
      </div>
      }
      
      <a>{recipe[0].ingredients[0].name}</a>
    
      <button class="prettybutton" onClick={() => {localStorage.removeItem('shoppingList'); forceUpdate()}}>Einkaufsliste leeren</button>
      
    </div>
  );
}

export default ShoppingList;
