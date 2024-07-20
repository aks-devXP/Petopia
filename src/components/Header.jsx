import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="site-header" style={{width: '100vw', backgroundColor: '#ff758f'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-12 d-flex flex-wrap">
                <p className="d-flex me-4 mb-0">
                    <i className="bi-geo-alt me-2"></i>
                    Akershusstranda 20, 0150 Oslo, Norway
                </p>
            </div>

            <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                <ul className="social-icon">
                    <li className="social-icon-item">
                        <NavLink to="#" className="social-icon-link bi-twitter"></NavLink>
                    </li>

                    <li className="social-icon-item">
                        <NavLink to="#" className="social-icon-link bi-facebook"></NavLink>
                    </li>

                    <li className="social-icon-item">
                        <NavLink to="#" className="social-icon-link bi-instagram"></NavLink>
                    </li>

                    <li className="social-icon-item">
                        <NavLink to="#" className="social-icon-link bi-youtube"></NavLink>
                    </li>

                    <li className="social-icon-item">
                        <NavLink to="#" className="social-icon-link bi-whatsapp"></NavLink>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</header>
    </>
  )
}

export default Header