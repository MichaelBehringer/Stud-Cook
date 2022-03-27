import React from "react";
import {useNavigate} from "react-router";
import "../styles/Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footerContainer">
      <div className="footer">
        <button className="footerText" onClick={() => {navigate('/impressum');}}>Impressum/Datenschutz</button>
      </div>
    </div>
  );
}

export default Footer;