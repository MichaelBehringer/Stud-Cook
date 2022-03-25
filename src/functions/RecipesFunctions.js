/* eslint eqeqeq: 0 */

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
	return compareStrings(a.strMeal, b.strMeal);
}

export function convertApiRecipeToStudyCookFormat(data){
		const studyCookJson = {'id': data.idMeal, 'name': data.strMeal, 'duration': 0, 'image': data.strMealThumb, 'process': [data.strInstructions], 'video': data.strYoutube}

		const oneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18, 19, 20]
		// eslint-disable-next-line array-callback-return
		const studyIngrediences = oneToTwenty.map((number)=> {
			if(data['strIngredient'+number] != "") {
				return {'name': data['strIngredient'+number], 'amounth': '', 'scale': data['strMeasure'+number]}
			}
		}).filter(notUndefined => notUndefined !== undefined && notUndefined.name !== null && notUndefined.scale !== null);

		const grammStudyIngrediences = studyIngrediences.map(ing => {
			return {'name': ing.name, 'amounth': ing.amounth, 'scale': ing.scale.split('/')[0]}
		})

		const returnJson = {...studyCookJson, 'ingredients': grammStudyIngrediences}
		return returnJson
}