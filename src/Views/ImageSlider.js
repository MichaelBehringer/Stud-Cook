import React, {useEffect, useState} from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {useNavigate} from 'react-router-dom';
import {getRandomRecipe} from '../functions/MealDbFunctions';

const slideProps = {
  indicators: true,
  duration: 3000,
  arrows: false
};

function ImageSlider() {
  const [imageSliderData, setImageSliderData] = useState([]);

  useEffect(() => {
    const prom1 = getRandomRecipe();
    const prom2 = getRandomRecipe();
    const prom3 = getRandomRecipe();
    const prom4 = getRandomRecipe();
    const prom5 = getRandomRecipe();

    Promise.all([prom1, prom2, prom3, prom4, prom5]).then((values) => {
      setImageSliderData(values);
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="slide-container">
      <Slide {...slideProps}>
        {imageSliderData.map((randomRecipe, index) => (
          <div onClick={() => navigate('/detail/' + randomRecipe.idMeal)} key={index} className='box'>
            <img alt={randomRecipe.strMeal} key={index} className="zoomIMG" src={randomRecipe.strMealThumb}/>
            <div className="imgCaption">{randomRecipe.strMeal.length > 27 ? randomRecipe.strMeal.slice(0, 27) + ' ...' : randomRecipe.strMeal}</div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
export default ImageSlider;