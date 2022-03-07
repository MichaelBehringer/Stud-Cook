/* eslint eqeqeq: 0 */

export function getRecipeForID(searchID) {
	const recipes = require('../data/Recipes.json');

	return recipes.filter(recipe => recipe.id == searchID)[0];
}

export function getNextRecipe(searchID) {
	const recipes = require('../data/Recipes.json');

	let returnRecipe = {};

	recipes.filter((recipe, idx) => {
		if(recipe.id==searchID) {
			if((idx+1)==recipes.length) {
				returnRecipe =  recipes[0]
			} else {
				returnRecipe = recipes[idx+1]
			}
		}
		return returnRecipe
	});

	return returnRecipe;
}

export function getPreviousRecipe(searchID) {
	const recipes = require('../data/Recipes.json');

	let returnRecipe = {};

	recipes.filter((recipe, idx) => {
		if(recipe.id==searchID) {
			if(idx==0) {
				returnRecipe =  recipes[recipes.length-1]
			} else {
				returnRecipe = recipes[idx-1]
			}
		}
		return returnRecipe
	});

	return returnRecipe;
}