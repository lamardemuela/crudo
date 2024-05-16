import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function SearchFoodPlanning(props) {
    const [ searchTerm , setSearchTerm ] = useState('')
    const navigate = useNavigate()
    const {isDarkTheme} = useContext(ThemeContext)

    useEffect(() => {       
      const delayDebounceFn = setTimeout(() => {  
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning?title_like=${searchTerm}`)
        .then((resp)=>{
          props.setFoodPlannings(resp.data)
        })
        .catch((error)=>{
          navigate('/error')
        })
      }, 200)//*SE PUEDO CORREGIR EL TIEMPO QUE TARDA EN MOSTRAR LOS NUEVOS RESULTADOS
  
      return () => clearTimeout(delayDebounceFn)
  
    }, [searchTerm])
  
    return (
      <div className="d-flex m-2 gap-2 justify-content-center align-items-center flex-wrap" >
        <Form.Control
            data-bs-theme={isDarkTheme?"dark":"light"}
            type="text"
            placeholder="Buscar plato...🔍"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
    )
  }
  

export default SearchFoodPlanning