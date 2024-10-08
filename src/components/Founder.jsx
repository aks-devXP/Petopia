import React from 'react'
import { NavLink } from 'react-router-dom'


const Founder = () => {
  return (
    <section className="about-section section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-5 col-12">
                    <img src="images/portrait-volunteer-who-organized-donations-charity.jpg" className="about-image ms-lg-auto bg-light shadow-lg img-fluid" alt=""/>
                </div>

                <div className="col-lg-5 col-md-7 col-12">
                    <div className="custom-text-block">
                        <h2 className="mb-0">Sandy Chan</h2>

                        <p className="text-muted mb-lg-4 mb-md-4">Co-Founding Partner</p>

                        <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>

                        <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

                        <ul className="social-icon mt-4">
                            <li className="social-icon-item">
                                <NavLink to="#" className="social-icon-link bi-twitter"></NavLink>
                            </li>

                            <li className="social-icon-item">
                                <NavLink to="#" className="social-icon-link bi-facebook"></NavLink>
                            </li>

                            <li className="social-icon-item">
                                <NavLink to="#" className="social-icon-link bi-instagram"></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Founder