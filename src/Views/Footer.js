import React from "react";
import {useNavigate} from "react-router";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footerContainer">
      <div className="footer">
          <span className="footerText" onClick={() => {navigate('/impressum')}}>Impressum/Datenschutz</span>
      </div>
    </div>
  );
}

export default Footer;
