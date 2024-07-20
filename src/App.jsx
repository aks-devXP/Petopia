import { useState } from 'react'
// import './App.css'
import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import VetPage from './pages/VetPage'
import Volunteer from './pages/Volunteer'
import News from './components/News'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/vet" element={<VetPage></VetPage>}></Route>
      <Route path="/volunteer" element={<Volunteer></Volunteer>}></Route>
      <Route path="/news" element={<News></News>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
    </Route>
  ));

  return <RouterProvider router={router}></RouterProvider>
}

export default App
