
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="header">
      <img onClick={() => navigate('/')} src={require("../images/"+ (width<=750 ? 'name_small.png' : 'name.png'))} className="headerLogo" alt="logo"/>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="navAnimation"
        unmountOnExit
      >
        <nav className="nav">
          <span onClick={() => {navigate('/'); toggleNav()}}>Home</span>
          <span onClick={() => {navigate('/search'); toggleNav()}}>Suche</span>
          <span onClick={() => {navigate('/shoppingList'); toggleNav()}}>Einkaufsliste</span>
          <span onClick={() => {navigate('/contact'); toggleNav()}}>Kontakt</span>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="burgerButton">
        ☰
      </button>
    </header>
  );
}
