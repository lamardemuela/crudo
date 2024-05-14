import { useNavigate, useParams,Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap/esm";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import DishCard from "../components/DishCard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FoodPlanningDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [foodPlannigList, setFoodPlanningList] = useState(null);

  const [breakfastDish, setBreakfastDish] = useState(null);
  const [lunchDish, setLunchDish] = useState(null);
  const [dinnerDish, setDinnerDish] = useState(null);
  const [show, setShow] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    getFoodPlanningList();
  }, [isFav]);

  const getFoodPlanningList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${
          params.foodPlanningId
        }`
      );

      setFoodPlanningList(response.data);
      const response1 = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/dishes/${response.data.breakFastDishId}`
      );
      setBreakfastDish(response1.data);

      const response2 = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/dishes/${response.data.lunchDishId}`
      );
      setLunchDish(response2.data);

      const response3 = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/dishes/${response.data.dinnerDishId}`
      );
      setDinnerDish(response3.data);
    } catch (error) {
      navigate("/error");
    }
  };



  if (
    foodPlannigList === null ||
    breakfastDish === null ||
    lunchDish === null ||
    dinnerDish === null
  ) {
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
    gap: "32px",
    margin: "16px",
  };
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);

  const handleDelete = () => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${
      params.foodPlanningId}`)
      .then(()=>{
        navigate('/food-planning-list')
      }).catch((error)=>{
        navigate("/error");
      })
  }
  const handleToggleFav = () => {
    axios.patch(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${
      params.foodPlanningId}`,{"isFav":!foodPlannigList.isFav})
      .catch((error)=>{
        navigate("/error");
      })
    setIsFav(!isFav)
  }

  return (
    <>
      <div style={containerMenu}>
        <div>
          <img
            src={foodPlannigList.image}
            alt={foodPlannigList.title}
            height="300px"
            style={{ borderRadius: "16px" }}
          />
          <div style={actionsStyles}>
            <Button variant="light" onClick={handleToggleFav}>{foodPlannigList.isFav ? "❤️" : "🩶"}</Button>
            <Button variant="light" as={Link} to={`/edit-food-planning/${foodPlannigList.id}`}>✏️</Button>
            <Button variant="light" onClick={handleShow}>🗑</Button>
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
      <h2>Dishes from {foodPlannigList.title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", gap:"24px" }}>
        {foodPlannigList.breakFastDishId!==""?<div>
          <h4>Breakfast</h4>
          <DishCard dish={breakfastDish} />
        </div>:""}
        {foodPlannigList.lunchDishId!==""?<div>
          <h4>Lunch</h4>
          <DishCard dish={lunchDish} />
        </div>:""}
        {foodPlannigList.dinnerDishId!==""?<div>
          <h4>Dinner</h4>
          <DishCard dish={dinnerDish} />
        </div>:""}        
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete {foodPlannigList.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Food Planning?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> 
    </>
  );
}

export default FoodPlanningDetails;
