import React from "react";
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom'

import DetailView from "./Views/DetailView";
import HomeView from "./Views/HomeView";
import SearchView from "./Views/SearchView";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Unsere Kopfzeile</h2>
      <button onClick={() => navigate('/')}>Hauptseite</button>
      <button onClick={() => navigate('/search')}>Suche</button>
        <Routes>
          <Route exact path="/" element={<HomeView/>}/>
          <Route exact path="/search" element={<SearchView/>}/>
          <Route exact path="/detail/:recipeID" element={<DetailView/>}/>
          <Route path="*" element={<HomeView/>}/>
        </Routes>
      <h2>Unsere Fuszeile</h2>
    </div>
  );
}

export default App;
