import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function FoodPlanningCard(props) {
  // destructuring
  const { id, title, description, image } = props.eachFoodPlanning;

  return (
    // <div style={containerCardStyles}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/food-planning-details/${id}`}>
          <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
  );
}

export default FoodPlanningCard;
