import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='site-footer'>
        <div className="container"  >
        <div className="row d-flex flex-wrap">
            <div className="col-lg-3 col-md-6 col-12 ml-auto mb-4">
                <h5 className="site-footer-title mb-3">Quick Links</h5>
                <ul className="footer-menu">
                    <li className="footer-menu-item"><NavLink to="/about" className="footer-menu-link">Our Story</NavLink></li>

                    <li className="footer-menu-item"><NavLink to="/news" className="footer-menu-link">Newsroom</NavLink></li>

                    <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">Report Animal Abuse</NavLink></li>

                    <li className="footer-menu-item"><NavLink to="/volunteer" className="footer-menu-link">Become a volunteer</NavLink></li>

                    <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">Partner with us</NavLink></li>
                </ul>
            </div>

            <div className="col-lg-7 col-md-6 col-12 mx-auto mb-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5345238171944!2d10.733102277174364!3d59.906675874899115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416fe86d29c841%3A0xad0cba8f12d7d45c!2sAkershusstranda%2020%2C%200015%20Oslo%2C%20Norway!5e0!3m2!1sen!2sin!4v1720521795023!5m2!1sen!2sin" width="90%" height="100%" style={{border:'0'}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-lg-2 col-md-6 col-12 mr-auto mb-5">
                <h5 className="site-footer-title mb-3">Contact Infomation</h5>

                <p className="text-white d-flex mb-2">
                    <i className="bi-telephone me-2"></i>
                    <NavLink to="tel: 999966660" className="site-footer-link">
                        +91 999966660
                    </NavLink>
                </p>

                <p className="text-white d-flex mb-2">
                    <i className="bi-envelope me-2"></i>

                    <NavLink to="mailto:support@petopia.com" className="site-footer-link">
                        support@petopia.com
                    </NavLink>
                </p>

                <p className="text-white d-flex mt-2">
                    <i className="bi-geo-alt me-2"></i>
                    Akershusstranda 20, 0150 Oslo, Norway
                </p>

                <NavLink to="/contact" className="custom-btn btn mt-3">Contact Us</NavLink>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer