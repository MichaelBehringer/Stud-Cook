import React from "react";
import ImageSlider from "./ImageSlider";

function EmailSent() {
  return (
    <div>
      <div className="card cardMain">
        <h1>Email Gesendet!</h1>
        <h2><a href="/~gruppe4ai21">Zurück zum Homebildschirm</a></h2>
        <div className="recipeContainer">
            <ImageSlider/>
        </div>
      </div>
    </div>
  );
}

export default EmailSent;
