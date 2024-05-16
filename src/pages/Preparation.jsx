import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap/esm";
import ProgressBar from "react-bootstrap/ProgressBar";
import animation from "../assets/images/preparation.gif";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function Preparation() {
  const params = useParams();
  const navigate = useNavigate();
  const [steps, setStep] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const {isDarkTheme} = useContext(ThemeContext)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
      .then((response) => {
        setStep(response.data.preparation);
        //console.log(response.data.preparation);
      })
      .catch((error) => {
        navigate("/error");
      });
  }, []);

  if (steps === null) {
    <Spinner animation="border" role="status">
      <span className="visually-hidden">...Loading...</span>
    </Spinner>;
  }

  // event next step
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // styles
  const containerPreparation = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "24px",
    // backgroundColor: "white",
    backgroundColor:isDarkTheme?"#212529":"#fff",
    padding: "28px",
    borderRadius: "8px",
    margin: "24px",
  };

  return (
    <div>
      {steps === null || steps === undefined ? (
        <h3>This dish has no saved preparation steps</h3>
      ) : (
        <div style={containerPreparation}>
          <h5> Dish preparation steps </h5>
          <ProgressBar
            variant={currentStep === steps.length - 1 ? "success" : "warning"}
            animated
            now={((currentStep + 1) / steps.length) * 100}
            min={10}
            max={100}
          />
          <div>
            <img src={animation} alt="preparation" width="200px" />
          </div>
          <h2>{steps[currentStep]}</h2>
          {currentStep === steps.length - 1 ? (
            <Button as={Link} to={`/dish-details/${params.dishId}`}>
              {" "}
              Back to dish details{" "}
            </Button>
          ) : (
            <Button onClick={handleNextStep}> Next Step </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Preparation;
