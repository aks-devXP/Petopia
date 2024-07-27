import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/veterinary/img1.jpg'
import img2 from '../assets/images/veterinary/img2.jpg'
import img3 from '../assets/images/veterinary/img3.jpg'

const VetCarousel = ({controls}) => {

  return (
    <>
        <div className="container-fluid col-lg-7 mt-4 mb-5 rounded">
            <Carousel fade interval={3000} controls={false} indicators={false} className='carousel-inner2' id='hero-slide2'>
                <Carousel.Item className='carousel-item'>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>

        <div>

        </div>
    </>
  )
}

export default VetCarousel