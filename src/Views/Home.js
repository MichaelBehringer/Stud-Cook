import React from "react";
import ImageSlider from "./ImageSlider";
import Switch from "react-switch";

function Home(props) {
  return (
    <div>
      <div className="card cardMain">
        <h1>Top-Rezepte der Woche</h1>
        <div className="recipeContainer">
            <ImageSlider/>
        </div>
        <span>API switch:</span>
        <Switch onColor="#66921B" checked={props.isApiActive} onChange={() => props.handleReactSwitch(props.setIsApiActive)}/>
      </div>
    </div>
  );
}

export default Home;
