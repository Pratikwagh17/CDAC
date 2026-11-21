import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgPath from '../shared/constant/ConstantData';

const MycorouselComp = () => {
  return (
    <div>
        <h2>this is corousal</h2>
         <Carousel>
      <Carousel.Item>
        {/* <MycorouselComp text="First slide" /> */}
        <img src={imgPath.ladoo} alt='laddoo' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <MycorouselComp text="Second slide" /> */}
        <img src={imgPath.jalebi} alt='laddoo' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <MycorouselComp text="Third slide" /> */}
        <img src={imgPath.ladoo} alt='laddoo' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default MycorouselComp;
