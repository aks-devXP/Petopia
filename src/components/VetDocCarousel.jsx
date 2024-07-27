import React, { useRef } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import Slider from 'react-slick';
import { Card } from 'react-bootstrap'
import StarRating from './StarRating';

const VetDocCarousel = ({doctors}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
            {doctors.map((doctor)=>(
              <div className='d-flex'>
                <Card className='card' style={{ width: '20rem', height:'28rem', marginRight: '15px'}}>
                  <Card.Img style={{height: '15rem', width:'auto'}} src={doctor.imageUrl} />
                    <Card.Body>
                        <Card.Title>{doctor.name}</Card.Title>
                        <Card.Text>
                        {doctor.specialty}
                        <div></div>
                        <StarRating rating={doctor.stars}></StarRating>
                        <p>Based on 207 Ratings</p>
                        {/* <h6>Based on 207 Ratings</h6> */}
                        </Card.Text>
                        <Card.Text>
                        {doctor.location}
                        </Card.Text>
                        <Button variant='primary'>Book Now</Button>
                    </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>

    </>
  )
}

export default VetDocCarousel