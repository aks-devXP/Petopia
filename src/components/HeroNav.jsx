import React from 'react'
import { NavLink } from 'react-router-dom'
import heartIcon from '../assets/images/icons/trainer.png'
import receiveIcon from '../assets/images/icons/animal-rights.png'
import scholarIcon from '../assets/images/icons/pet-shop.png'
import vet from '../assets/images/icons/vet.png'

const HeroNav = () => {
  return (
    <>
        <section className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-12 text-center mx-auto">
                    <h2 className="mb-5">Welcome to Petopia</h2>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="featured-block d-flex justify-content-center align-items-center">
                        <NavLink to="/vet" className="d-block">
                            <img src={vet} className="featured-block-image img-fluid" alt=""/>

                            <p className="featured-block-text">Book an <strong>Appointment</strong></p>
                        </NavLink>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                    <div className="featured-block d-flex justify-content-center align-items-center">
                        <NavLink to="/trainer" className="d-block">
                            <img src={heartIcon} className="featured-block-image img-fluid" alt=""/>

                            <p className="featured-block-text"><strong>Pet</strong> Trainers Nearby</p>
                        </NavLink>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                    <div className="featured-block d-flex justify-content-center align-items-center">
                        <NavLink to="/animal_welfare" className="d-block">
                            <img src={receiveIcon} className="featured-block-image img-fluid" alt=""/>
                            <p className="featured-block-text">Animal <strong>Welfare</strong></p>
                        </NavLink>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="featured-block d-flex justify-content-center align-items-center">
                        <NavLink to="/shopping" className="d-block">
                            <img src={scholarIcon} className="featured-block-image img-fluid" alt=""/>

                            <p className="featured-block-text"><strong>Shopping</strong> Center</p>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default HeroNav