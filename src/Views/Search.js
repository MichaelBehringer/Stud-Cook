import React, {useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {orderRecipesByName} from "../functions/RecipesFunctions";
import {getContainingRecipes, getStartingRecipes} from "../functions/MealDbFunctions";
import {isBlank} from "../functions/CommentFunctions";


function Search() {
  return (
    <div className="card cardMain searchCard">
      <h1>Suche</h1>
      <SearchBar placeholder="Suchbegriff eingeben.."/>
    </div>
  );
}

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  const navigate = useNavigate();
  let searchWord;

  useEffect(() => {
    const prom1 = getStartingRecipes('a')
    const prom2 = getStartingRecipes('b')
  
    Promise.all([prom1, prom2]).then((values) => {
      setDefaultRecipes(values[0].concat(values[1]))
      setFilteredData(values[0].concat(values[1]))
    });
  }, []);


  const handleFilter = (event) => {
    searchWord = event.target.value;
    setWordEntered(searchWord);

    if(!isBlank(searchWord)) {
      getContainingRecipes(searchWord).then(recipes => setFilteredData(recipes ? orderRecipesByName(recipes) : []))
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text"  placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
      </div> 
      {
        <div>
          {(isBlank(wordEntered) ? defaultRecipes : filteredData).slice(0, 15).map((recipe, idx) => {
            return (
              <div key={idx} className="flexContainer" onClick={() => navigate('/detail/' + recipe.idMeal)}>
              <img className="recipePic" alt={recipe.strMeal} src={recipe.strMealThumb} />
              <div className="recipeDescription">
                <h2>{recipe.strMeal}</h2>
                <p>Kathegorie: {recipe.strCategory}</p>
                <p>Herkunft: {recipe.strArea}</p>
              </div>
              </div>
            );
          })}


        </div>
      }
    </div>
  );
}

export default Search;