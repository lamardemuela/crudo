import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function DishCard(props) {
  const { id, title, description } = props.dish
  
  return (
    
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Link to={`/dish-details/${id}`}><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </Card>
  )
}

export default DishCard