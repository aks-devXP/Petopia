import React from 'react'
import { NavLink } from 'react-router-dom'

import Slider from '../components/Slider'
import HeroNav from '../components/HeroNav'
import TopNgo from '../components/TopNgo'
import Testimonials from '../components/Testimonials'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
    <Header></Header>
    <Slider></Slider>
    <HeroNav></HeroNav>
    <TopNgo></TopNgo>
    <Testimonials></Testimonials>
    </>
  )
}

export default HomePage