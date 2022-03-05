import React from "react";

function ShoppingList() {
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
        </ul>
      </div>
      :
      <div>
        <h1>Einkaufsliste ist leer</h1>
      </div>
      }
      <button onClick={() => {localStorage.removeItem('shoppingList'); forceUpdate()}}>Zur Einkaufsliste leeren</button>
    </div>
  );
}

export default ShoppingList;
