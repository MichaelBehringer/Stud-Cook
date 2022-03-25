import React, {useEffect, useState} from "react";

import { Route, Routes } from 'react-router-dom';

import DetailView from "./Views/DetailView";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Header from "./Views/Header";
import Contact from "./Views/Contact";
import Impressum from "./Views/Impressum";
import ShoppingList from "./Views/ShoppingList";
import Footer from "./Views/Footer";
import EmailSent from "./Views/EmailSent";
import {ToastContainer} from "react-toastify";

const backgroundImageStyle = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("backgroundImage.jpg")',
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

function App() {
  return (
    <div style={backgroundImageStyle} className="mainStyle App">
      <Header />
      <div className='Content'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/shoppingList" element={<ShoppingList/>}/>
        <Route exact path="/emailSent" element={<EmailSent/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/impressum" element={<Impressum/>}/>
        <Route exact path="/detail/:recipeID" element={<DetailView/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      </div>
      <Footer/>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;