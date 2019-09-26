import React, { useState, useEffect } from 'react';
import './Slide.css'

function Slide(props) {
  const { images } = props;
  const [imageIndex, setNewimages] = useState(0);
  let c = 0

  const timer = () =>  {
     return setInterval(nextSlide, 1000)
   }

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = imageIndex === lastIndex
		const index =  shouldResetIndex ? 0 : imageIndex + 1
    setNewimages(index)
  }

  const initialImg = () => {
    console.log(imageIndex)
    clearInterval(timer)
    setNewimages(0)
  }


  return(
    <div className="card-image" onMouseEnter={timer} onMouseLeave={initialImg} >
        <img src={images[imageIndex]}/>
       {/* {(typeof images == 'object') ? images.map((img, i) => <img key={i} src={img}/>) : 'No Images'} */}
    </div>
  )
}

export default Slide
