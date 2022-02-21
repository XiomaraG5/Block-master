import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { API_URL } from '../helpers/Url'
const { v4: uuidv4 } = require('uuid');

function MasValoradas() {
  const[datos,setDatos]= useState([])
    const[counter,setCounter]=useState(2)
    useEffect(()=>{
        const getData = ()=>{
    axios.get(API_URL+1)
        .then(res =>{
            setDatos(
           res.data.results   
           )
        })
        .catch(error =>{
            console.log(error);
        })
}
getData()
    },[setDatos])

     const showMore =(e)=>{
        e.preventDefault()
        setCounter(
            +1
        )
        moreData()
    }
    const moreData=()=>{
        axios.get(API_URL+counter)
        .then(res =>{
            setDatos(
                
          [...datos, ...res.data.results   ]
           )
        })
        .catch(error =>{
            console.log(error);
        })
    }
    console.log(datos);
  return (
    <div>
    <div className='containere '>
      {datos.map(pelicula =>(
        <div  > 
      {pelicula.vote_average >6?<Card style={{ width: '12rem' }} className="mb-2 carta" key={uuidv4()}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>
        <Card.Body>
          <p className='voto'>{pelicula.vote_average}<i className="bi bi-star-fill"></i></p>
          <Card.Title className='title'>{pelicula.original_title}</Card.Title>
         <p className='overview'>{pelicula.overview}</p>
        </Card.Body>
      </Card>:""}
      </div>
  ))}
    </div>
    <button onClick={showMore} className='btn'>show more</button>
    </div>
  )
}

export default MasValoradas