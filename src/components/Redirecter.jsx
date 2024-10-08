import React from 'react'
import { NavLink } from 'react-router-dom'


const Redirecter = () => {
  return (
    <>
        <section className="cta-section section-padding section-bg">
        <div className="container">
            <div className="row justify-content-center align-items-center">

                <div className="col-lg-5 col-12 ms-auto">
                    <h2 className="mb-0">Make an impact. <br/> Save lives.</h2>
                </div>

                <div className="col-lg-5 col-12">
                    <NavLink to="#" className="me-4">Make NavLink donation</NavLink>

                    <NavLink to="#section_4" className="custom-btn btn smoothscroll">Become NavLink volunteer</NavLink>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Redirecter