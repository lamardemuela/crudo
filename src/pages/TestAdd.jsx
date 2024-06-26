import React from "react";
import DishTitle from "../components/DishTitle";
import Draggable from "react-draggable";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap/esm";
import { useNavigate } from "react-router-dom";

function TestAdd() {
  const [dishesList, setDishesList] = useState(null);
  const [breakFastId, setBreakFastId] = useState();
  const [lunchId, setLunchId] = useState();
  const [dinnerId, setDinnerId] = useState();
  const [tempId, setTempId] = useState();
  const [canAssignDish, setCanAssignDish] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes`).then((response) => {
      setDishesList(response.data);
    });
  }, []);

  if (dishesList === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div
      id="main"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
      }}
    >
      <div
        id="breakFast"
        style={{
          backgroundColor: "green",
          width: "200px",
          height: "200px",
        }}
      ></div>
      <div
        id="lunch"
        style={{
          backgroundColor: "orange",
          width: "200px",
          height: "200px",
        }}
      ></div>
      <div
        id="dinner"
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {dishesList.map((eachDish) => {
          return (
            <Draggable key={eachDish.id}>
              <div
                style={{
                  userSelect: "none",
                }}
              >
                <DishTitle eachDish={eachDish} />
              </div>
            </Draggable>
          );
        })}
      </div>
    </div>
  );
}

export default TestAdd;
