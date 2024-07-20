import React from 'react';
import { NavLink } from 'react-router-dom';
import wom from '../assets/images/avatar/wom-1.jpg'
import bob from '../assets/images/avatar/bob.jpg'
import jane from '../assets/images/avatar/jane.jpg'
import thomas from '../assets/images/avatar/thomas.jpg'

const Testimonials = () => {
  return (
    <>
        <section className="testimonial-section section-padding section-bg">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 col-12 mx-auto">
                    <h2 className="mb-lg-3">Happy Customers</h2>
                    
                        <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item">
                                   <div className="carousel-caption">
                                        <h4 className="carousel-title">I love shopping for my cat on Petopia! The selection of products is amazing, and I always find exactly what I need. My cat has never been happier.</h4>

                                        <small className="carousel-name"><span className="carousel-name-title">Maria</span>, Cat Lover</small>
                                   </div>
                                </div>

                                <div className="carousel-item active">
                                    <div className="carousel-caption">
                                        <h4 className="carousel-title">The animal welfare section on Petopia is truly inspiring. I was able to find a wonderful NGO to volunteer with and adopted my sweet puppy through their platform. </h4>

                                        <small className="carousel-name"><span className="carousel-name-title">Thomas</span>, Partner</small>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-caption">
                                        <h4 className="carousel-title">Petopia offers the best pet training services! Our dog's behavior has improved drastically, and the trainers are incredibly knowledgeable and patient.</h4>

                                        <small className="carousel-name"><span className="carousel-name-title">Jane</span>, Advisor</small>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-caption">
                                        <h4 className="carousel-title">Petopia has been a lifesaver for my furry friend! Scheduling veterinary appointments is so easy, and the care my dog receives is top-notch.</h4>

                                        <small className="carousel-name"><span className="carousel-name-title">Bob</span>, Entreprenuer</small>
                                   </div>
                                </div>

                                  <ol className="carousel-indicators">
                                       <li data-bs-target="#testimonial-carousel" data-bs-slide-to="0" className="">
                                            <img src={wom}className="img-fluid rounded-circle avatar-image" alt="avatar"/>
                                       </li>

                                       <li data-bs-target="#testimonial-carousel" data-bs-slide-to="1" className="active" aria-current="true">
                                            <img src={thomas}className="img-fluid rounded-circle avatar-image" alt="avatar"/>
                                       </li>

                                       <li data-bs-target="#testimonial-carousel" data-bs-slide-to="2" className="">
                                            <img src={jane} className="img-fluid rounded-circle avatar-image" alt="avatar"/>
                                       </li>

                                       <li data-bs-target="#testimonial-carousel" data-bs-slide-to="3" className="">
                                            <img src={bob}className="img-fluid rounded-circle avatar-image" alt="avatar"/>
                                       </li>
                                  </ol>

                         </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials