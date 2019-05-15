import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

const Header = () => {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Slide1.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Slide2.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Slide3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
);
}

export default Header