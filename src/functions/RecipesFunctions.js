/* eslint eqeqeq: 0 */

export function getRecipeForID(searchID) {
	const recipes = require('../data/Recipes.json');

	return recipes.filter(recipe => recipe.id == searchID)[0];
}

export function getNextRecipe(searchID) {
	const recipes = require('../data/Recipes.json');

	let returnRecipe = {};

	recipes.filter((recipe, idx) => {
		if (recipe.id == searchID) {
			if ((idx + 1) == recipes.length) {
				returnRecipe = recipes[0];
			} else {
				returnRecipe = recipes[idx + 1];
			}
		}
		return returnRecipe;
	});

	return returnRecipe;
}

export function getPreviousRecipe(searchID) {
	const recipes = require('../data/Recipes.json');

	let returnRecipe = {};

	recipes.filter((recipe, idx) => {
		if (recipe.id == searchID) {
			if (idx == 0) {
				returnRecipe = recipes[recipes.length - 1];
			} else {
				returnRecipe = recipes[idx - 1];
			}
		}
		return returnRecipe;
	});

	return returnRecipe;
}

export function orderRecipesByName(recipes) {
	recipes.sort(sortFunction);
	return recipes;
}

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}


function sortFunction(a, b) {
	return compareStrings(a.name, b.name);
}