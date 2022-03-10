import React from 'react';
import {Slide} from 'react-slideshow-image';
import{ SliderData } from './SliderData';
import 'react-slideshow-image/dist/styles.css';
import {useNavigate } from 'react-router-dom';

const slideProps={
  indicators: true,
  duration: 3000,
  arrows: false
}

const ImageSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="slide-container">
      <Slide {...slideProps}>
       {SliderData.map((slideImage, index)=> (
         <div key={index} className='box'>
          <img key={index} className="zoomIMG" src={require('../images/' + slideImage.url)} onClick={() => navigate('/detail/' + slideImage.id)}/>
          <div className="imgCaption">{slideImage.caption}</div>
         </div>
        ))} 
      </Slide>
    </div>
  )
}
export default ImageSlider