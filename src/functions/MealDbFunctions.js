export async function getRandomRecipe() {
	return custonAxiosGet('random.php').then(res => res.data.meals[0]);
}

export async function getSpecificRecipe(recipeID) {
	return custonAxiosGet('lookup.php?i=' + recipeID).then(res => res.data.meals[0]);
}

export async function getStartingRecipes(char) {
	return custonAxiosGet('search.php?f=' + char).then(res => res.data.meals);
}

export async function getContainingRecipes(searchInput) {
	return custonAxiosGet('search.php?s=' + searchInput).then(res => res.data.meals);
}

async function custonAxiosGet(url) {
	const axios = require('axios').default;
	return axios.get('https://www.themealdb.com/api/json/v1/1/' + url);
}