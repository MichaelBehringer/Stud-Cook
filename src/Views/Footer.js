import React from "react";
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Unsere Fuszeile</h2>
      <button onClick={() => navigate('/contact')}>Kontaktformular</button>
      <button onClick={() => navigate('/impressum')}>Impressum</button>
    </div>
  );
}

export default Footer;
