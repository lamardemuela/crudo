import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FoodPlanningCard from "../components/FoodPlanningCard";
import DishCard from "../components/DishCard";
import Spinner from "react-bootstrap/Spinner";
import hero from "../assets/images/hero-section.gif"
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function Home() {
  const navigate = useNavigate()
  const [foodPlannings, setFoodPlannings] = useState(null);
  const [dishes, setDishes] = useState(null);  
  const {isDarkTheme} = useContext(ThemeContext)

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
  <div className="hero-section-container" >
    <div className={isDarkTheme?"hero-section darkTheme":"hero-section lightTheme"} style={{backgroundColor:isDarkTheme?"#212529":"#fff"}}>
      <h5 style={{color:isDarkTheme?"#fff":"black"}}>Thanks to Crudo you can create or save your daily meal plans and individual dishes.</h5>
      <img src={hero} alt="hero section" width="300px" />
      <p style={{color:isDarkTheme?"#fff":"black"}}>Also, you can see how prepare a dish</p>
      <Button as={Link} to="/preparation/NBTkyjJ" variant="primary"> See a preparation demo</Button>
    </div>
    <div>   
      <h1 style={{marginBottom: "24px"}}>Favourite Food Plannings:</h1>
      <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap">
      {foodPlannings.map((eachFoodPlanning) => {
        return eachFoodPlanning.isFav&&<FoodPlanningCard key={eachFoodPlanning.id} eachFoodPlanning={eachFoodPlanning} />;
      })}
    </div>
    </div>
    <div>
      <h1 style={{marginBottom: "24px"}}>Favourite Dishes:</h1>
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