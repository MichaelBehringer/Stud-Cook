import React from "react";

function Home() {
  var topRecipe1 = require('../data/Recipes.json')[0];
  return (
    <div>
      <div className="card cardMain">
        <h1>Willkommen!</h1>
        <h2>Top-Rezepte der Woche</h2>
        <div className="flex-container">
          <img className="recipePic" alt={topRecipe1.name} src={ require('../images/' + topRecipe1.image) } />
          <div>
            <h2>{topRecipe1.name}</h2>
            <p>Zubereitungszeit: {topRecipe1.duration} Minuten</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
