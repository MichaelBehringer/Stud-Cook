/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
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
    <header className="Header">
      <img onClick={() => navigate('/')} src={require("../images/name.png")} className="Logo" alt="logo"/>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <span onClick={() => {navigate('/'); toggleNav()}}>Home</span>
          <span onClick={() => {navigate('/search'); toggleNav()}}>Suche</span>
          <span onClick={() => {navigate('/shoppingList'); toggleNav()}}>Einkaufsliste</span>
          <span onClick={() => {navigate('/contact'); toggleNav()}}>Kontakt</span>
          <span onClick={() => {navigate('/impressum'); toggleNav()}}>Impressum</span>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        ☰
      </button>
    </header>
  );
}