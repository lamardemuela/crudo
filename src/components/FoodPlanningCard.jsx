import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function FoodPlanningCard(props) {
  // destructuring
  const { id, title, description, image } = props.eachFoodPlanning;
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <Card style={{ width: "14rem", height: "25rem" }}
      data-bs-theme={isDarkTheme?"dark":"light"}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "8px",
        }}
      >
        <Card.Img variant="top" src={image} height="120rem" style={{objectFit:"cover"}}/>
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
