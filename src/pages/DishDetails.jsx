import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FoodPlanningCard from '../components/FoodPlanningCard'
import Button from "react-bootstrap/Button";
import { Spinner } from 'react-bootstrap/esm';

function DishDetails() {
  const navigate = useNavigate()
  const params = useParams()
  const [ dish, setDish ] = useState(null)
  const [ foodPlannigList, setFoodPlanningList ] = useState(null)

  useEffect(()=>{
    getDishDetails()
    getFoodPlannings()   
  },[])

  const getDishDetails = () =>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
    .then((response)=>{
      setDish(response.data)   
    })
    .catch((error)=>{
      console.log(error)
      navigate("/error")
    })
  }

  const getFoodPlannings = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`)
    .then((resp)=>{
      console.log(resp)
      const filterPlanningList = resp.data.filter((eachFoodPlan)=>{  
        return (
            eachFoodPlan.breakFastDishId === params.dishId ||
            eachFoodPlan.lunchDishId === params.dishId ||
            eachFoodPlan.dinnerDishId === params.dishId )
      })
      setFoodPlanningList(filterPlanningList)
    })
    .catch((error)=>{
      console.log(error)
      navigate("/error")
    })
  }

  console.log(dish)
  console.log(foodPlannigList)
  if (dish === "" || foodPlannigList === null) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
  }
  return (
    <div>
      <img src={dish.image} style={{height:"100px"}} alt="imagenPlato" />
      <h3>{dish.title}{dish.isFav?"❤️":"🩶"}</h3>
      <h3>{dish.description}</h3>
      <h4>{dish.tags}</h4>
      
      <Button variant="primary">Edit Dish</Button>

      {foodPlannigList
      .map((eachFoodPlan)=>{
        return (
        <FoodPlanningCard key={eachFoodPlan.id}
        eachFoodPlanning={eachFoodPlan}/>
        )
      })}
    </div>
  )
}

export default DishDetails