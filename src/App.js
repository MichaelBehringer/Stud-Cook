import React from "react";
import './App.css';
import './globalStyles.css'

import { Route, Routes } from 'react-router-dom'

import DetailView from "./Views/DetailView";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Header from "./Views/Header";
import Contact from "./Views/Contact";
import Impressum from "./Views/Impressum";

function App() {
  return (
    <div className="mainStyle App">
      <Header />
      <div className='Content'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/impressum" element={<Impressum/>}/>
        <Route exact path="/detail/:recipeID" element={<DetailView/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
