import React from 'react'
import Button from "react-bootstrap/Button";
import errorImg from "../assets/images/error.jpg"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <Link to="/">
        <Button style={{marginBottom: "32px"}} className='vibrate-1' variant="primary">Back to Home</Button>
      </Link>
      <img src={errorImg} alt="server error" width="100%" />
    </div>
  )
}

export default Error