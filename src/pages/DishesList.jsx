import React, { useEffect, useState } from "react";
import SearchDish from "../components/SearchDish";
import axios from "axios";
import { Spinner } from "react-bootstrap/esm";
import DishCard from "../components/DishCard";
import { useNavigate } from "react-router-dom";

function DishesList() {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dishes`)
      .then((resp) => {
        setDishes(resp.data);
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  if (dishes === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <SearchDish setDishes={setDishes} />
      <h1 style={{ margin: "24px", padding: "24px" }}> List of dishes: </h1>
      <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap">
        {dishes.map((eachDish) => {
          return <DishCard key={eachDish.id} dish={eachDish} />;
        })}
      </div>
    </>
  );
}

export default DishesList;
