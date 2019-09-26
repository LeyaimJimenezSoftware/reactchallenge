import React, { useState, useEffect } from 'react'
import './Card.css'

function Card(props) {
  const { images, name, description } = props
  const [imageIndex, setNewimages] = useState(0)
  const [maouseHover, setMouseHover] = useState(false)
  let intervalPID

  const isMauseHover = () => {
    setMouseHover(true)
  }

  const nextSlide = () => {
    const shouldResetIndex = (imageIndex === images.length - 1)
    shouldResetIndex ? setNewimages(0) : setNewimages(imageIndex + 1)
  }

  const timer = () => {
    intervalPID = setInterval(nextSlide, 1000)
  }

  useEffect(() => {
    if (maouseHover === true) {
      timer()
      return () => {
        clearInterval(intervalPID)
      }
    }
    else {
      setNewimages(0)
    }
  },[maouseHover, imageIndex])


  const reset =  () => {
    setMouseHover(false)
  }

  return(
    <div className="card" onMouseEnter={isMauseHover} onMouseLeave={reset}>
      <div className="card-content">
        <div className="card-image">
          <img alt={imageIndex} src={images[imageIndex]}/>
        </div>
        <div className="card-name">
          <p>{name}</p>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
