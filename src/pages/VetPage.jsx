import React from 'react'
import VetCarousel from '../components/VetCarousel'
import VetDocCarousel from '../components/VetDocCarousel';
import VetClinicCarousel from '../components/VetClinicCarousel';
import Faq from '../components/Faq';
import { NavLink } from 'react-router-dom'


const VetPage = () => {

  const doctors = [
    {
      name: 'Dr. John Doe',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.anshulShukla.jpg',
      specialty: 'Cardiology',
      stars: '4.2',
      location: 'New York, USA'
    },
    {
      name: 'Dr. Satya Yadav',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Satyendra.png',
      specialty: 'Pediatrics',
      stars: '5',
      location: 'Los Angeles, USA'
    },
    {
      name: 'Dr. Amit Shah',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.+Amit.png',
      specialty: 'Orthopedic',
      stars: '3.7',
      location: 'New Delhi, IN'
    },

    {
      name: 'Dr. Rajneesh Mishra',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.+Anurag+Garg.png',
      specialty: 'Psychatric',
      stars: '4.7',
      location: 'New Delhi, IN'
    },

    {
      name: 'Dr. Aazad Mani',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.+Anurag+Gunawat.png',
      specialty: 'Dentist',
      stars: '4.6',
      location: 'Agra, IN'
    },

    {
      name: 'Dr. Vinay Kumar',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.+Dheeraj.png',
      specialty: 'Radiology',
      stars: '3.9',
      location: 'Ratlaam, IN'
    },

    {
      name: 'Dr. Amrinder Chaddha',
      imageUrl: 'https://vetic-img.s3.ap-south-1.amazonaws.com/Dr.+Arun+Kumar.png',
      specialty: 'Veterinary',
      stars: '4.9',
      location: 'Ludhiana, IN'
    },
    // Add more doctors as needed
  ];

  const clinics = [
    {
      name: "Pitampura",
      timings: "8 A.M. to 11 P.M",
      stars: "4.3",
      imageUrl: "https://vetic-img.s3.ap-south-1.amazonaws.com/CDP/Pitampura+/Fac1.png"
    },

    {
      name: "Lajpat Nagar",
      timings: "9 A.M. to 8 P.M",
      stars: "4.6",
      imageUrl: "https://vetic-img.s3.ap-south-1.amazonaws.com/CDP/Defence+Colony/Fac1.jpg"
    },

    {
      name: "Okhla",
      timings: "8 A.M. to 10 P.M",
      stars: "4.9",
      imageUrl: "https://vetic-img.s3.ap-south-1.amazonaws.com/CDP/Malviya+nagar/Fac1.png"
    }


  ]

  return (
    <>
        <section style={{  background: '#5a6f80'}}>
          <div className="container mb-5 pt-5">
            <div style={{textAlign: 'center'}}><h1>Meet Our Vets</h1></div>
              <VetDocCarousel doctors={doctors} />
          </div>

          <div className="container pb-5">
            <div style={{textAlign: 'left'}}><h1>Top Rated Pet Clinics Near You</h1></div>
              <div><VetClinicCarousel clinics={clinics} /></div>
              <Faq></Faq>
          </div>

          <section style={{ background: '#5bc1ac'}}>
                <div className='mt-5 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column'>
                <h4 style={{textAlign: 'center'}}>Still have some questions?</h4>
                <p style={{color: 'white'}}>Can't find the answer you're looking for? Please contact our friendly customer support team.</p>
                <NavLink to="/contact" className="custom-btn btn mt-1">Contact Us</NavLink>
                </div>
          </section>
        </section>
    </>
  )
}

export default VetPage