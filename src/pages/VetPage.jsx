import React from 'react'
import VetCarousel from '../components/VetCarousel'
import VetDocCarousel from '../components/VetDocCarousel';

const VetPage = () => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      imageUrl: 'https://via.placeholder.com/150',
      specialty: 'Cardiology',
      stars: '4',
      location: 'New York, USA'
    },
    {
      name: 'Dr. Jane Smith',
      imageUrl: 'https://via.placeholder.com/150',
      specialty: 'Pediatrics',
      stars: '5',
      location: 'Los Angeles, USA'
    },
    {
      name: 'Dr. Amit Shah',
      imageUrl: 'https://via.placeholder.com/150',
      specialty: 'Orthopedic',
      stars: '3',
      location: 'New Delhi, IN'
    },
    // Add more doctors as needed
  ];

  return (
    <>
      <VetCarousel></VetCarousel>

      <div className="container mt-5">
        <div style={{textAlign: 'center'}}><h1>Meet Our Vets</h1></div>
        <VetDocCarousel doctors={doctors} />
      </div>

    </>
  )
}

export default VetPage