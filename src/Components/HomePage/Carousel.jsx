import React from 'react';
import './Carousel.css'; 

const Carousel = () => {
  return (
    <div className='container'>
      <div className='text-behind'>Your Text Here</div>
      <img src='./src/assets/img.jpeg' alt='Background' className='image' />
    </div>
  );
}

export default Carousel;


