import React from 'react'
import Slider from 'react-slick';
import { Card } from 'react-bootstrap'
import StarRating from './StarRating';
import { Button} from 'react-bootstrap'


const VetClinicCarousel = ({clinics}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 3,
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
        ]};

    return (
    <>
        <Slider {...settings}>
            {clinics.map((clinic)=>(
              <div className='d-flex'>
                <Card className='card' style={{ width: '20rem', height:'28rem'}}>
                  <Card.Img style={{height: '15rem', width:'auto'}} src={clinic.imageUrl} />
                    <Card.Body>
                        <span>{clinic.name}</span>
                        <p className='fw-bold t-0'>Timings: {clinic.timings}</p>
                        <Card.Text>
                        <StarRating rating={clinic.stars}></StarRating>
                        <p>Based on 207 Ratings</p>
                        {/* <h6>Based on 207 Ratings</h6> */}
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

export default VetClinicCarousel