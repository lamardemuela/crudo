import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Spinner } from "react-bootstrap/esm";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Preparation() {
    const params = useParams()
    const navigate = useNavigate()
    const [ steps, setStep ] = useState([])
    const [ currentStep, setCurrentStep ] = useState(0)
    const [ progressNum, setProgressNum ] = useState()


    useEffect(() => {

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
        .then((response) => {
            // console.log(response.data);
            setStep(response.data.preparation)
            console.log(response.data.preparation);
            // setCurrentStep()
            
            setProgressNum((1 / steps.length) * 100)
            
            
            
        })
        .catch((error) => {
            navigate('/error')
        })

    }, [])

    if(steps === null || progressNum === undefined) {
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
         </Spinner>
    }

    // event next step
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
        // console.log(steps.length);
        
        setProgressNum(progressNum + progressNum)
    }

    // styles
    const containerPreparation = {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        gap: "24px",
        backgroundColor: "white",
        padding: "28px",
        borderRadius: "8px",
        margin: "24px",
      };

  return (
    <div>
        {steps === null || steps === undefined ? <p>this dish hasn't got a preparation</p> : 
        // steps.map((eachStep, i) => {
        //     return <p key={i}> {i+1}.  {eachStep} </p>
        // })
        <div style={containerPreparation}>
            <h2> Dish preparation steps </h2>
            <ProgressBar animated now={50} min={10} max={100} label={progressNum} />
            <p>{steps[currentStep]}</p>
            <Button onClick={handleNextStep}> Next Step </Button>
        </div>
    }
    </div>
  )
}

export default Preparation