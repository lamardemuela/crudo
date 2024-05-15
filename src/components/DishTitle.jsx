import React from 'react'
import Card from 'react-bootstrap/Card';

function DishTitle(props) {
  return (
    <Card style={{ width: "8rem" }}>
      <Card.Img variant="top" src={props.eachDish.image}/>
      <Card.Body>{props.eachDish.title}</Card.Body>
    </Card>
  )
}

export default DishTitle