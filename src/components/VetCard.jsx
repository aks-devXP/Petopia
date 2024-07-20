import React from 'react'
import { Card } from 'react-bootstrap'

const VetCard = ({doctor}) => {
    return (
        <Card className='card' style={{ width: '15rem', marginRight: '15px'}}>
          <Card.Img variant="top" src={doctor.imageUrl} />
        <Card.Body>
            <Card.Title>{doctor.name}</Card.Title>
            <Card.Text>
            {doctor.specialty}
            </Card.Text>
            <Card.Text>
            {doctor.location}
            </Card.Text>
        </Card.Body>
        </Card>
      );
}

export default VetCard