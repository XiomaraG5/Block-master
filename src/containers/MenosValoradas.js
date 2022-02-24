import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import Carrusel from '../components/Carrusel';
import { Modaltrailers } from '../components/Modaltrailers';
import { API_URL } from '../helpers/Url'
const { v4: uuidv4 } = require('uuid');

export default function MenosValoradas() {
  const[datos,setDatos]= useState([])
    const[counter,setCounter]=useState(2)
    const[show,setShow]=useState(false)
  const[info,setInfo]=useState({
    id:"",
    name:""
  })
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
            counter+1
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
    const handleShow=(pelicula)=>{
      setShow(true)
      setInfo({
        id:pelicula.id,
        name:pelicula.original_title
     } )
    }
    const handleClose=()=>{
      setShow(false)
    }
    const handleUp=(e)=>{
      e.preventDefault()
     window.scrollTo(0,0)
    }
    console.log(datos);
  return (
    <div className=''>
      <Carrusel datos={datos}/>
    <div  className='d-flex flex-wrap justify-items-center align-items-center m-auto gap-2 containere'>
      {datos.map(pelicula =>(
        <> 
      {pelicula.vote_average <6?<Card style={{ width: '12rem' }}
       className="mb-2 carta" 
       onClick={()=>handleShow(pelicula)}
       key={uuidv4()}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>
        <Card.Body>
          <p className='voto'>{pelicula.vote_average}<i className="bi bi-star-fill"></i></p>
          <Card.Title className='title'>{pelicula.original_title}</Card.Title>
         <p className='overview'>{pelicula.overview}</p>
        </Card.Body>
        
      </Card>:""}
      </>
  ))}
  <Modal show={show} onHide={handleClose} 
        className="modal"
        animation={true}>
        <Modal.Header closeButton
        className='modalHeader'>
          <Modal.Title>{info.name}</Modal.Title>
        </Modal.Header>
        <Modaltrailers info={info}/>
        <Modal.Footer className='modalFooter'>
          <Button className='btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <button className='sticky' onClick={handleUp}>ir arriba</button>
    <button onClick={showMore} className='btn'>show more</button>
    </div>
  )
}
