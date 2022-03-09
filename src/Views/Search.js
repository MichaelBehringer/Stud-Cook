import React from "react";
import {useNavigate } from 'react-router-dom';
import SearchData from '../data/Recipes.json';
import {useState} from 'react';


function Search() {
  return (
    <div className="App">
      <SearchBar placeholder="Search..." data={SearchData} />
    </div>
  );
}


function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate();
  let recipes = require('../data/Recipes.json');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" key={value.id} onClick={() => navigate('/detail/' + value.id)}>
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
      {recipes.map((recipe) => <button className="colorThemeButton searchButton" key={recipe.id} onClick={() => navigate('/detail/' + recipe.id)}>{recipe.name}</button>)}
    </div>
  );
}
export default Search;