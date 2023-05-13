import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Kee_job</Card.Header>
      <Card.Body>
        <Card.Title>Any problems</Card.Title>
        <Card.Text>
          click here to describle your problem 
        </Card.Text>
        <Button variant="primary"> click here   </Button>
      </Card.Body>
      <Card.Footer className="text-muted">terms and regulations</Card.Footer>
    </Card>
  )
}

export default Footer