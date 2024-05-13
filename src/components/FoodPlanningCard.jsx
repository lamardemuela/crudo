import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function FoodPlanningCard(props) {
  // destructuring
  const { title, description, image } = props.eachFoodPlanning;

  return (
    // <div style={containerCardStyles}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
  );
}

export default FoodPlanningCard;
