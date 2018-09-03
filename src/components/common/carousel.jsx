import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/carousel.css';
const Carousel = ({children}) => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={5000}
      mouseDragEnabled
      dotsDisabled
      
      responsive={{
          0:{
              items: 1
          },
          1024: {
              items:5,
          },
      }}
       >
      {children}
    </AliceCarousel>
  )
};

Carousel.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Carousel;
