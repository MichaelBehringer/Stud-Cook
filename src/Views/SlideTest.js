import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'Schnitzel.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'Placeholder.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'Spagetti.jpg',
    caption: 'Slide 3'
  },
];

function Impressum() {
  return (
    <div>
      <div className="card cardMain">
        <h1>Impressum</h1>
      <div  className="slide-container">
        <Slide style={{'height': '500px'}}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'height': '500px', 'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
        </div>
        
      </div>
    </div>
  );
}

export default Impressum;
