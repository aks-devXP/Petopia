import React from 'react'
import { NavLink } from 'react-router-dom'
import manager from '../assets/images/avatar/manager.jpg'

const ContactUs = () => {
  return (
    <>
        <section className="contact-section section-padding" style={{backgroundColor: '#FFF0F3'}} id="section_6">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                    <div className="contact-info-wrap">
                        <h2>Get in touch</h2>

                        <div className="contact-image-wrap d-flex flex-wrap">
                            <img src={manager} className="img-fluid avatar-image" alt=""/>

                            <div className="d-flex flex-column justify-content-center ms-3">
                                <p className="mb-0">Clara Barton</p>
                                <p className="mb-0"><strong>HR &amp; Office Manager</strong></p>
                            </div>
                        </div>

                        <div className="contact-info">
                            <h5 className="mb-3">Contact Infomation</h5>

                            <p className="d-flex mb-2">
                                <i className="bi-geo-alt me-2"></i>
                                Akershusstranda 20, 0150 Oslo, Norway
                            </p>

                            <p className="d-flex mb-2">
                                <i className="bi-telephone me-2"></i>

                                <NavLink to="tel: +91 999966660">
                                    +91 999966660
                                </NavLink>
                            </p>

                            <p className="d-flex">
                                <i className="bi-envelope me-2"></i>

                                <NavLink to="mailto:support@petopia.com">
                                    support@petopia.com
                                </NavLink>
                            </p>

                            <NavLink to="https://maps.app.goo.gl/h3owoTeNAq6g5yYH7" className="custom-btn btn mt-3">Get Direction</NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-12 mx-auto">
                    <form className="custom-form contact-form" action="#" method="post" role="form" style={{backgroundColor: '#bde0fe'}}>
                        <h2>Contact form</h2>

                        <p className="mb-4">Or, you can just send an email at:  
                            <NavLink to="mailto:support@petopia.com"> support@petopia.com</NavLink>
                        </p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <input type="text" name="first-name" id="first-name" className="form-control" placeholder="Jack" required=""/>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <input type="text" name="last-name" id="last-name" className="form-control" placeholder="Doe" required=""/>
                            </div>
                        </div>

                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com" required=""/>

                        <select id="exampleDropdown" className="form-control" defaultValue="">
                        <option value="" disabled>Who are you</option>
                        <option value="petOwner">Pet Owner</option>
                        <option value="option2">Veterinary Doc</option>
                        <option value="option3">Pet Trainer</option>
                        <option value="option4">Others</option>
                    </select>

                        <textarea name="message" rows="5" className="form-control" id="message" placeholder="How can we help you?"></textarea>

                        <button type="submit" className="form-control">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs