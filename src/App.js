import React from "react";
import './App.css';
import './globalStyles.css'

import { Route, Routes, useNavigate } from 'react-router-dom'

import DetailView from "./Views/DetailView";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Header from "./Views/Header";
import Footer from "./Views/Footer";
import Contact from "./Views/Contact";
import Impressum from "./Views/Impressum";
import ShoppingList from "./Views/ShoppingList";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/impressum" element={<Impressum/>}/>
        <Route exact path="/shoppingList" element={<ShoppingList/>}/>
        <Route exact path="/detail/:recipeID" element={<DetailView/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
