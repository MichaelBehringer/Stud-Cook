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

export function convertApiRecipeToStudyCookFormat(response){
		let data = response.data.meals[0]
		const studyCookJson = {'id': data.idMeal, 'name': data.strMeal, 'duration': 0, 'image': data.strMealThumb, 'process': [data.strInstructions]}

		const oneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18, 19, 20]
		const studyIngrediences = oneToTwenty.map((number)=> {
			if(data['strIngredient'+number] != "") {
				return {'name': data['strIngredient'+number], 'amounth': '', 'scale': data['strMeasure'+number]}
			}
		}).filter(notUndefined => notUndefined !== undefined);

		const returnJson = {...studyCookJson, 'ingredients': studyIngrediences}
		return returnJson
}