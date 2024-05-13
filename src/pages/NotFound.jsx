import React from 'react'
import notFoundImg from "../assets/images/not-found.jpg"
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <div style={{margin:"70px"}}>
      <Link to="/">
        <Button style={{marginBottom: "32px"}} className='vibrate-1' variant="primary">Back to Home</Button>
      </Link>
      <img src={notFoundImg} alt="not found" width="100%" />
    </div>
  )
}

export default NotFound