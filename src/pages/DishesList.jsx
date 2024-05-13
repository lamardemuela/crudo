import React, { useEffect, useState } from 'react'
import SearchDish from '../components/SearchDish'
import axios from 'axios'
import { Spinner } from 'react-bootstrap/esm'
import { Link } from 'react-router-dom'

function DishesList() {
  const [dishes, setDishes] = useState([])

  useEffect(()=>{
    getDishes()
  },[])

  const getDishes = () => {
    //axios.get(`${import.meta.env.VITE_BACKEND_URL}`)
    axios.get(`http://localhost:5005/dishes`)
     .then((resp)=>{
      setDishes(resp.data)
     })
     .catch((error)=>{
      console.log(error)
      //navigate('/error')
     })
  }
  if(dishes === null){
    return <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
  }


  return (
    <>
      <SearchDish setDishes={setDishes}/>

      {dishes.map((dish, i) => {
        return (
          <div key={i}>
            <Link to={"/dishes/" + dish.id}>
              <h5>IMAGEN_DEL_PLATO</h5>
              <h5>TITLE: {dish.title}</h5>
              <h5>DESCRIPTION: {dish.description}</h5>
              <h5>{dish.isFav?"❤️":""}</h5>
              <h5>TAGS: {dish.tags}</h5>
            </Link>
            <hr />
          </div>
            );
          })}
    </>
  )
}

export default DishesList