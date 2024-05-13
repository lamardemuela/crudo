import React, { useState,useEffect } from 'react'
import axios from 'axios'

function SearchDish(props) {

  const [ searchTerm , setSearchTerm ] = useState('')

  useEffect(() => {       
    const delayDebounceFn = setTimeout(() => {  
    axios.get(`http://localhost:5005/dishes?title_like=${searchTerm}`)
      .then((resp)=>{
        props.setDishes(resp.data)
      })
      .catch((error)=>{
        //console.log(error)
        //falta gestionar error
      })
    }, 1500)

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