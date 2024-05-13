import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DishDetails() {
  const params = useParams()

  useEffect(()=>{
    //peticion a json-server
    //axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
    axios.get(`http://localhost:5005/dishes/${params.dishId}`)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
      //navigate("/error")
    })
  },[])


  return (
    <div>
      DETALLES PLATO {params.dishId}
    </div>
  )
}

export default DishDetails