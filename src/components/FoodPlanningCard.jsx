import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function FoodPlanningCard(props) {
  // destructuring
  const { id, title, description, image } = props.eachFoodPlanning;

  return (
    <Card style={{ width: "14rem", height: "25rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "8px",
        }}
      >
        <Card.Img variant="top" src={image} height="120rem" />
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
