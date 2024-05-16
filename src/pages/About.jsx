import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img from '../assets/images/logo-crudo.png'

function About() {
  return (
    <div className="about-project">
      <h1>KNOW THE PROJECT</h1>
      <div className="about-child">
      <img src={img} width={"200px"} alt="logoCRUDO" />
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
      <div className="about-child">
      <h1>KNOW THE TEAM</h1>
        
        <div className="about-us">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D03AQFxobxXqTz3zQ/profile-displayphoto-shrink_200_200/0/1714067499462?e=1721260800&v=beta&t=QvpLQ9y3FNf5C6cWFUc2ctKk_vlL16dNVVKIoap6rTU" alt="Águeda" />
              <Card.Title>Águeda Muela:</Card.Title>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>About me.</span>
                </p>
                <p>👋🏻 ¡Hola! Soy Águeda, una profesional apasionada con experiencia en UX/UI Design, ahora sumergiéndome en el desarrollo web</p>
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
        
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D03AQGOeuL4JV2SZA/profile-displayphoto-shrink_400_400/0/1715238086912?e=1721260800&v=beta&t=tGjLIgFA_CL3SqgjZOqyE8-OVT1w_luXcfdb355jEqQ" alt="Asier"/>
              <Card.Title>Asier Mimbrero:</Card.Title>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>About me.</span>
                </p>
                <p>👋🏻 Soy Asier, vuelvo al mundo del desarrollo después de unos años en el mundo hostelero como barista profesional.</p>
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
