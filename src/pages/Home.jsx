import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodPlanningCard from "../components/FoodPlanningCard";
import DishCard from "../components/DishCard";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const navigate = useNavigate()
  const [foodPlannings, setFoodPlannings] = useState(null);
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`)
      .then((response) => {
        //console.log(response);
        setFoodPlannings(response.data);
      })
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes`)
      .then((resp)=>{
        setDishes(resp.data)
      })
    } catch (error) {
      console.log(error);
      navigate('/error')
    }
  }, []);

  if (foodPlannings === null || dishes === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
  <div>
    <div>   
      <h1>FAVORITE FOOD PLANNINGS:</h1>
      <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap">
      {foodPlannings.map((eachFoodPlanning) => {
        return eachFoodPlanning.isFav&&<FoodPlanningCard key={eachFoodPlanning.id} eachFoodPlanning={eachFoodPlanning} />;
      })}
    </div>
    </div>
    <div>
      <h1>FAVORITE DISHES:</h1>
      <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap">
      {dishes.map((eachDish) => {
        return eachDish.isFav&&<DishCard key={eachDish.id} dish={eachDish} />
      })}
    </div>
    </div>
  </div>
  )
}

export default Home