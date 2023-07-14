import React from 'react'
import {sliderImages} from '../../utils/image';
import "./Slider.scss"

const Slider = () => {
  return (
    <div className='hero-slider'>
      <div className='hero-slider-item'>
        <img src={sliderImages[1]} alt='' />
      </div>
    </div>
  )
}

export default Slider