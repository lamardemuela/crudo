import React, { useState,useEffect } from 'react'
import axios from 'axios'

function SearchDish(props) {
  const [ searchTerm , setSearchTerm ] = useState('')

  useEffect(() => {       
    const delayDebounceFn = setTimeout(() => {  
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes?title_like=${searchTerm}`)
      .then((resp)=>{
        props.setDishes(resp.data)
      })
      .catch((error)=>{
        //console.log(error)
        //falta gestionar error
      })
    }, 200)//*SE PUEDO CORREGIR EL TIEMPO QUE TARDA EN MOSTRAR LOS NUEVOS RESULTADOS

    return () => clearTimeout(delayDebounceFn)

  }, [searchTerm])

  return (
    <input
        type="text"
        placeholder='Buscar plato...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  )
}

export default SearchDish