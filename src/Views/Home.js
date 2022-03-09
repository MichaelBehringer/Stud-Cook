import React from "react";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <div>
      <div className="card cardMain">
        <h1>Willkommen!</h1>
        <h2>Top-Rezepte der Woche</h2>
        <div className="recipeContainer">
            <ImageSlider/>
        </div>
      </div>
    </div>
  );
}

export default Home;
