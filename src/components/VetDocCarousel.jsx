import React, { useRef } from 'react'
import { Carousel } from 'react-bootstrap'
import VetCard from '../components/VetCard'

const VetDocCarousel = ({doctors}) => {
    const carouselRef = useRef(null);

    const handleNext = ()=>{
        carouselRef.current.next();
    }

    const handlePrev = ()=>{
        carouselRef.current.prev();
    }

    const renderVetCards = () => {
        const itemsPerSlide = 2; // Number of VetCards per slide
        const slides = [];
        let i = 0;
        while(i < doctors.length){
            if(i+itemsPerSlide <= doctors.length){
                // console.log("yup");
                const cards = doctors.map((doc,index)=>{
                    <div className="col-md-4" key={index}>
                      <VetCard vet={doc} />
                    </div>
                });

                slides.push(
                    <Carousel.Item key={i}>
                      <div className="row">{cards}</div>
                    </Carousel.Item>
                );


            }
            i += itemsPerSlide;
        }
        console.log(slides);
        return slides;
      };

  return (
    <>
        <Carousel ref={carouselRef} interval={null} indicators={false} controls={false}>
        {doctors.map((doctor, index) => (
            <Carousel.Item key={index}>
            <VetCard doctor={doctor} />
            </Carousel.Item>
        ))}

        </Carousel>

        <div className="mt-3 text-center">
        <button className="btn btn-primary me-2" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  )
}

export default VetDocCarousel