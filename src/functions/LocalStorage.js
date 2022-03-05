export function addToLocalStorage(recipeID) {
    let stringShoppingList = localStorage.getItem('shoppingList')
    if(stringShoppingList) {
      let shoppingList = JSON.parse(stringShoppingList).shoppingList
      shoppingList.push(parseInt(recipeID))
      localStorage.setItem('shoppingList', JSON.stringify({shoppingList: shoppingList}))
    } else {
      localStorage.setItem('shoppingList', JSON.stringify({shoppingList: [parseInt(recipeID)]}))
    }
}