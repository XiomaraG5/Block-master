import React, { useState } from 'react'
import{ MovieFilter} from './movieFilter'

export default function Buscador () {
  const [pelicula,setPelicula]= useState("")
  const[modal,setModal]= useState(false)
  
  
  const  handleinputChange = ({target}) =>{
      setPelicula({
          
          [target.name]:target.value
      })
      
  }
  const handleFocus = ()=>{
      setModal(true)
  }
  const handleFocusLeave =()=>{
      setModal(false)
  }
  
           console.log(pelicula);
  return (
    <div className='containerB'>
        <input type="text"   placeholder='search' className="buscador"
        name="pelicula"
        onFocus={handleFocus}
        onChange={handleinputChange }
        onBlur={handleFocusLeave}
        id="buscador"
        />
        {modal &&<MovieFilter pelicula={pelicula} />}
    </div>
  )

}