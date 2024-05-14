import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function DishCard(props) {
  const { id, title, description, image } = props.dish;

  return (
    <Card style={{ height: "18rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <Card.Img variant="top" src={image} height="120rem" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/dish-details/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DishCard;
