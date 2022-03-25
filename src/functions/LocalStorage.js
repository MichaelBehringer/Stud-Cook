import {toast} from "react-toastify";

export function addToLocalStorage(recipeID) {
  let stringShoppingList = localStorage.getItem('shoppingList');
  if (stringShoppingList) {
    let shoppingList = JSON.parse(stringShoppingList).shoppingList;
    shoppingList.push(parseInt(recipeID));
    localStorage.setItem('shoppingList', JSON.stringify({shoppingList: shoppingList}));
  } else {
    localStorage.setItem('shoppingList', JSON.stringify({shoppingList: [parseInt(recipeID)]}));
  }
  toast.success('Erfolgreich hinzugefügt', {position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined});
}