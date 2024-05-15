import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FoodPlanningCard from "../components/FoodPlanningCard";
import Spinner from "react-bootstrap/Spinner";
import SearchFoodPlanning from '../components/SearchFoodPlanning'
import { Button } from "react-bootstrap";

function FoodPlanning() {
  const navigate = useNavigate()
  const [foodPlanningsArr, setFoodPlannings] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`)
      .then((response) => {
        //console.log(response);
        setFoodPlannings(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate('/error')
      });
  }, []);

  if (foodPlanningsArr === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
    <SearchFoodPlanning setFoodPlannings={setFoodPlannings}/>
    {/*<div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap" >
      
      <Button as={Link} to={'/test'}>Add new with Drag & Drop</Button>
    </div>*/}
    <h1 style={{margin:"24px",padding:"24px"}}> Food Plannings</h1>
    <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap">
      {foodPlanningsArr.map((eachFoodPlanning) => {
        return <FoodPlanningCard key={eachFoodPlanning.id} eachFoodPlanning={eachFoodPlanning} />;
      })}
    </div>
    </>
  );
}

export default FoodPlanning;
