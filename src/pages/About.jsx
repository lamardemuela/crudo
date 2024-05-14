import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img from '../assets/images/logo-crudo.png'

function About() {
  return (
    <div>
      <h1>KNOW THE PROJECT</h1>
      <div style={{display:"flex",flexDirection:"column",gap:"32px", justifyContent:"center", alignItems:"center"}}>
      <img src={img} height={"200px"} width={"600px"} alt="logoCRUDO"/>
        <h3>
          This project was created to know about use of REACT, states,
          json-server, APIs etc for IRONHACK April-2024 by Águeda and Asier.
        </h3>
        <p>
          <Link
            as={Link}
            to="https://github.com/MDasier/backendCrudo"
            target="_blank"
          >
            Backend Repository
          </Link>
        </p>
        <p>
          <Link
            as={Link}
            to="https://github.com/lamardemuela/crudo"
            target="_blank"
          >
            Frontend Repository
          </Link>
        </p>
      </div>
      <h1>KNOW THE TEAM</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D35AQEjOAPoM_zpMQ/profile-framedphoto-shrink_400_400/0/1714067500345?e=1716307200&v=beta&t=dN85eWrHHgnjy0nQML5iRTf9oydQGO9lnjHMSTgDCMg" alt="Águeda" />
              <Card.Title>Águeda Muela:</Card.Title>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>About me.</span>
                </p>
              </Card.Text>
              <Link
                to="https://www.linkedin.com/in/agueda-muela/"
                target="_blank"
              >
                <h5>Linkedin </h5>
              </Link>
              <Link to="https://github.com/lamardemuela/" target="_blank">
                <h5>GitHub </h5>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D03AQGOeuL4JV2SZA/profile-displayphoto-shrink_400_400/0/1715238086912?e=1721260800&v=beta&t=tGjLIgFA_CL3SqgjZOqyE8-OVT1w_luXcfdb355jEqQ" alt="Asier"/>
              <Card.Title>Asier Mimbrero:</Card.Title>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>About me.</span>
                </p>
              </Card.Text>
              <Link to="https://www.linkedin.com/in/asiermd/" target="_blank">
                <h5>Linkedin </h5>
              </Link>
              <Link to="https://github.com/MDasier" target="_blank">
                <h5>GitHub </h5>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
