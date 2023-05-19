import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Markup } from 'interweave';
import 'react-slideshow-image/dist/styles.css'

function SlideshowImage(props) {
  return (
    <>
      <div className="slide-container">
        <Slide>
         {props.slideImagesObj.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="each-slideimage" style={{backgroundImage: `url(${slideImage.url})`, }}  >
               <div className="slidecaptionBaneer">
                  <h3>{slideImage.captionHead}</h3>
                  <p> <Markup content={slideImage.contant} /></p>
               </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
  )
}

export default SlideshowImage
