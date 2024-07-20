import React from "react"
import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo2.png'

const Navbar = () => {
    const linkClass = ({isActive})=>(isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2")
  
    return (
      <>
        <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '10vh'}}><nav className="navbar navbar-expand-lg bg-light shadow-lg" style={{width: '100vw'}}>
    <div className="container">
        <NavLink className="navbar-brand" to="index.html">
            <img src={logo} className="logo img-fluid" alt="Kind Heart Charity"/>
            <span>Petopia
                <small>Utopia for your pets</small>
            </span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link click-scroll inactive" to="/">Home</NavLink>
                </li>

                <li className="nav-item dropdown">
                    <NavLink className="nav-link click-scroll dropdown-toggle inactive" to="/services" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>

                    

                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                        <li><NavLink className="dropdown-item" to="/vet">Veterinary Assistance</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/trainers">Pet Trainers</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/animal_welfare">Animal Welfare</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/shopping">Shopping Center</NavLink></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link click-scroll inactive" to="/news">News</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link click-scroll inactive" to="/volunteer">Volunteer</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link click-scroll inactive" to="/about">About Us</NavLink>
                </li>

                <li className="nav-item ms-3">
                    <NavLink className="nav-link custom-btn custom-border-btn btn inactive" to="/login">Sign In</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav></div>
      </>
    )
  }
  
  export default Navbar