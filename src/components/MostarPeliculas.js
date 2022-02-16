import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateMovie } from '../actions/actionMovies';
import { API_URL } from '../helpers/Url';
import { UseData } from '../hooks/UseData';

export const MostarPeliculas=()=> {
  const state = useSelector(state=>state);
    const dispatch = useDispatch()
    const {peliculas} = state.movie;
  const[pelicula,setPelicula]=useState([])
  const {i}=UseData

  const getData = ()=>{
    axios.get(API_URL+i)
        .then(res =>{
            
          setPelicula(res.data.results)
        })
        .catch(error =>{
            console.log(error);
        })
        
}
 
useEffect(()=>{
    getData()
    console.log(peliculas);
      
      

    
},[])
// const getMovies = ()=>{
//     axios.get(API_URL)
//         .then(res=>{
//             setPelicula(res.data.results )
//         })
//         .catch(error =>{
//                 console.log(error);
//             })
// }

  return (
      <>
    <div>MostarPeliculas</div>
    <div>
        <Container className='d-flex flex-wrap gap-2'>
    {
        pelicula.map(ele=>(
            <Card style={{ width: '10rem' }} 
            key={ele.id}
            className="pelicula">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+ele.poster_path}/>
        <Card.Body>
          <Card.Title>{ele.original_title}</Card.Title>
         
        </Card.Body>
      </Card>
        ))
    }
    </Container>
    </div>
    </>
  )
}
