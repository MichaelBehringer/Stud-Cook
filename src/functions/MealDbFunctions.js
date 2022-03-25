export async function getRandomRecipe() {
	const axios = require('axios').default;
	return axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.data.meals[0]);
}

export async function getSpecificRecipe(recipeID) {
	const axios = require('axios').default;
	return axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeID).then(res => res.data.meals[0]);
}

export async function getStartingRecipes(char) {
	const axios = require('axios').default;
	return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + char).then(res => res.data.meals);
}

export async function getContainingRecipes(searchInput) {
	const axios = require('axios').default;
	return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput).then(res => res.data.meals);
}