import React from 'react'
import { NavLink } from 'react-router-dom'
import mission from '../assets/images/mission.jpg'


const TeamInfo = () => {
  return (
    <>
        <section className="section-padding section-bg" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                    <img src={mission} className="custom-text-box-image img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="custom-text-box">
                        <h2 className="mb-2">Our Story</h2>

                        <h5 className="mb-3">Clean & Responsive Web-App</h5>

                        <p className="mb-0">The Project is based on MERN Stack with bootstrap for CSS and currently under development phase</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="custom-text-box mb-lg-0">
                                <h5 className="mb-3">Our Mission</h5>

                                <p>All in one solution for all needs related to your furry friends</p>

                                <ul className="custom-list mt-2">
                                    <li className="custom-list-item d-flex">
                                        <i className="bi-check custom-text-box-icon me-2"></i>
                                        Veterinary Assistance
                                    </li>

                                    <li className="custom-list-item d-flex">
                                        <i className="bi-check custom-text-box-icon me-2"></i>
                                        Pet Training
                                    </li>

                                    <li className="custom-list-item d-flex">
                                        <i className="bi-check custom-text-box-icon me-2"></i>
                                        Animal Welfare
                                    </li>

                                    <li className="custom-list-item d-flex">
                                        <i className="bi-check custom-text-box-icon me-2"></i>
                                        Shopping Center
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                <div className="counter-thumb"> 
                                    <div className="d-flex">
                                        <span className="counter-number-text">2024</span>
                                    </div>

                                    <span className="counter-text">Founded</span>
                                </div> 

                                <div className="counter-thumb mt-4"> 
                                    <div className="d-flex">
                                        <span className="counter-number-text">2</span>
                                    </div>

                                    <span className="counter-text">Team Size</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default TeamInfo