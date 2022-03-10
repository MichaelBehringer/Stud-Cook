import React from "react";
import ImageSlider from "./ImageSlider";
import { useNavigate } from 'react-router-dom';

function EmailSent() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card cardMain">
        <h1>Email Gesendet!</h1>
        <h2><a onClick={() => navigate("/")}>Zurück zum Homebildschirm</a></h2>
        <div className="recipeContainer">
            <ImageSlider/>
        </div>
      </div>
    </div>
  );
}

export default EmailSent;
