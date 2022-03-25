import React from "react";
import ImageSlider from "./ImageSlider";

function Home(props) {
  return (
    <div>
      <div className="card cardMain">
        <h1>StudyCook Empfehlungen:</h1>
        <div className="recipeContainer">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
