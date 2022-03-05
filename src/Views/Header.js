import React from "react";
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Unsere Kopfzeile</h2>
      <button onClick={() => navigate('/')}>Hauptseite</button>
      <button onClick={() => navigate('/search')}>Suche</button>
    </div>
  );
}

export default Header;
