import React from "react";
import {useNavigate } from 'react-router-dom';
import SearchData from '../data/Recipes.json';
import {useState} from 'react';
import {orderRecipesByName} from "../functions/RecipesFunctions";


function Search() {
  return (
    <div className="card cardMain searchCard">
      <h1>Suche</h1>
      <SearchBar placeholder="Suchbegriff eingeben.." data={SearchData} />
    </div>
  );
}

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState(orderRecipesByName(data));
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate();
  let searchWord;

  const handleFilter = (event) => {
    searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    setFilteredData(orderRecipesByName(newFilter));
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text"  placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
      </div> 
      {
        <div>
          {filteredData.slice(0, 15).map((recipe, idx) => {
            return (
              <div key={idx} className="flexContainer" onClick={() => navigate('/detail/' + recipe.id)}>
              <img className="recipePic" alt={recipe.name} src={ require('../images/' + recipe.image) } />
              <div className="recipeDescription">
                <h2>{recipe.name}</h2>
                <p>Zubereitungszeit: {recipe.duration} Minuten</p>
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