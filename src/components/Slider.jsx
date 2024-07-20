import React from 'react'
import { NavLink } from 'react-router-dom'

import img1 from '../assets/images/slide/dog-human.jpg'
import img2 from '../assets/images/slide/vet.jpg'
import img3 from '../assets/images/slide/dog.jpg'

const Slider = () => {
  return (
    <>
        <section className="hero-section hero-section-full-height">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-12 p-0">
                    <div id="hero-slide" className="carousel carousel-fade slide" style={{width: '100vw'}} data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src={img1} className="carousel-image img-fluid" alt="..."/>
                                
                                <div className="carousel-caption d-flex flex-column justify-content-end">
                                    <h1>be a Kind Heart</h1>
                                    
                                    <p>Always go for adoption</p>
                                </div>
                            </div>

                            <div className="carousel-item active">
                                <img src={img2} className="carousel-image img-fluid" alt="..."/>
                                
                                <div className="carousel-caption d-flex flex-column justify-content-end">
                                    <h1>Highly Rated</h1>
                                    
                                    <p>Professional Veterinarians you can trust upon</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={img3} className="carousel-image img-fluid" alt="..."/>
                                
                                <div className="carousel-caption d-flex flex-column justify-content-end">
                                    <h1>Trainers</h1>
                                    
                                    <p>A well behaved pet is a well groomed pet</p>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Slider