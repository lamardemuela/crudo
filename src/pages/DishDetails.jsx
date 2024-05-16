import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import FoodPlanningCard from "../components/FoodPlanningCard";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap/esm";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function DishDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [dish, setDish] = useState(null);
  const [foodPlannigList, setFoodPlanningList] = useState(null);
 

  const {isDarkTheme} = useContext(ThemeContext)

  useEffect(() => {
    getDishDetails();
    getFoodPlannings();
  }, []);

  const getDishDetails = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
      .then((response) => {
        setDish(response.data);
        // setIsFav(response.data.isFav)
      })
      .catch((error) => {

        navigate("/error");
      });
  };

  const getFoodPlannings = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`)
      .then((resp) => {
        //console.log(resp);
        const filterPlanningList = resp.data.filter((eachFoodPlan) => {
          return (
            eachFoodPlan.breakFastDishId === params.dishId ||
            eachFoodPlan.lunchDishId === params.dishId ||
            eachFoodPlan.dinnerDishId === params.dishId
          );
        });
        setFoodPlanningList(filterPlanningList);
      })
      .catch((error) => {
        ////console.log(error)
        navigate("/error");
      });
  };

  if (dish === null || foodPlannigList === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleToggleFav = () => {
    // setIsFav(!isFav);
    setDish({...dish, isFav: !dish.isFav})
    axios
      .patch(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`, {
        isFav: !dish.isFav,
      })
      .catch((error) => {
        navigate("/error");
      });
  };


  return (
    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <div className="containerMenu" style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>
        <div className="container-details">
          <img
            className="img-details"
            src={dish.image}
            alt={dish.title}
            height="300px"
            style={{ borderRadius: "16px" }}
          />
          <div className="actionsStyles" style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>
            <Button variant="light" onClick={handleToggleFav} style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>
              {dish.isFav ? "❤️" : "🩶"}
            </Button>
            <Button variant="light" as={Link} to={`/edit-dish/${dish.id}`} style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>
              ✏️
            </Button>
            <Button variant="light" style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>🗑</Button>
            <Button as={Link} to={`/preparation/${dish.id}`} variant="light" style={{backgroundColor:isDarkTheme?"#212529":"#fff", color:isDarkTheme?"#fff":"#212529"}}>Preparation</Button>
          </div>

          <h2>{dish.title}</h2>
          <p>{dish.description}</p>
          {/* <h4>{dish.tags}</h4> */}

          {dish.tags.map((eachTag, i) => {
            return (
              <Badge key={i} bg="secondary">
                {eachTag}
              </Badge>
            );
          })}
        </div>
      </div>

      <h2>Food Plannings</h2>
      {foodPlannigList.map((eachFoodPlan) => {
        return (
          <div
            key={eachFoodPlan.id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <FoodPlanningCard eachFoodPlanning={eachFoodPlan} />
          </div>
        );
      })}
    </div>
  );
}

export default DishDetails;
