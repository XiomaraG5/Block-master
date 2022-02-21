import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Carrusel from '../components/Carrusel';
import Geo from '../components/Geo';
import { API_URL } from '../helpers/Url';

export default function Home() {
 
  const [datos,setDatos]=useState([])
   const veo = useSelector(state=>state.user)
   console.log(veo);

useEffect(() => {
  getData()

}, [])

  const getData = ()=>{
    axios.get(API_URL+3)
        .then(res =>{
            setDatos(
           res.data.results   
           )
        })
        .catch(error =>{
            console.log(error);
        })
}


  return (
    <div >
      <Geo />
      <Carrusel datos={datos}/>
      <div className='containere '>
        {datos.map(pelicula =>(
      <Card style={{ width: '12rem' }} className="mb-2" key={pelicula.id}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>
        <Card.Body>
          <Card.Title>{pelicula.original_title}</Card.Title>
         
        </Card.Body>
      </Card>
  ))}
      </div>
    </div>
  )
}