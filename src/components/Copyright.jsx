import React from 'react'

const Copyright = () => {
  return (
    <>
    <div className="site-footer-bottom">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-7 col-12">
                    <p className="copyright-text mb-0">Copyright © 2036 <NavLink to="#">Kind Heart</NavLink> Charity Org.
                  Design: <NavLink to="https://templatemo.com" target="_blank">TemplateMo</NavLink></p>
                </div>
                
                <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
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
                            <NavLink to="#" className="social-icon-link bi-linkedin"></NavLink>
                        </li>

                        <li className="social-icon-item">
                            <NavLink to="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Copyright