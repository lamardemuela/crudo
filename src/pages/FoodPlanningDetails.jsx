import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap/esm";
import axios from "axios";
import Badge from "react-bootstrap/Badge";

function FoodPlanningDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [foodPlannigList, setFoodPlanningList] = useState(null);
  let variablebreakfastDish;
  const [breakfastDish, setBreakfastDish] = useState(null);
  const [lunchDish, setLunchDish] = useState(null);
  const [dinnerDish, setDinnerDish] = useState(null);

  useEffect(() => {
    getFoodPlanningList();
  }, []);

  const getFoodPlanningList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${
          params.foodPlanningId
        }`
      );
      console.log(response.data.breakFastDishId);
      setFoodPlanningList(response.data);
      //setBreakfastDish(response.data.breakFastDishId)
      variablebreakfastDish = response.data.breakFastDishId;
      //console.log(breakfastDish);
      getBreakfastDish();
    } catch (error) {
      navigate("/error");
    }
  };

  const getBreakfastDish = async () => {
    //console.log(breakfastDish);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/dishes/${variablebreakfastDish}`
      );
      setBreakfastDish(response.data);
      console.log(breakfastDish);
    } catch (error) {
      navigate("/error");
    }
  };

  if (foodPlannigList === null || breakfastDish === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  // styles
  const containerMenu = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "8px",
    margin: "24px",
  };

  const actionsStyles = {
    display: "flex",
    justifyContent: "center",
    gap:"32px",
    margin: "16px"
  };

  return (
    <>
      <div style={containerMenu}>
        <div>
          <img
            src={foodPlannigList.image}
            alt={foodPlannigList.title}
            height="300px"
            style={{borderRadius: "16px"}}
          />
          <div style={actionsStyles}>
            <p>{foodPlannigList.isFav ? "❤️" : "🩶"}</p>
            <p>✏️</p>
            <p>🗑</p>
          </div>
          <h2>{foodPlannigList.title}</h2>
          <p>{foodPlannigList.description}</p>
          {foodPlannigList.tags.map((eachTag, i) => {
            return (
              <Badge key={i} bg="secondary">
                {eachTag}
              </Badge>
            );
          })}
        </div>
      </div>
      {/* <Badge bg="secondary">{foodPlannigList.tags}</Badge> */}
      <h2>Dishes</h2>
      <p>{breakfastDish.title}</p>
    </>
  );
}

export default FoodPlanningDetails;
