import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Carrusel from '../components/Carrusel';
import Geo from '../components/Geo';
import { Modaltrailers } from '../components/Modaltrailers';
import Paginacion from '../components/Paginacion';
import { API_URL } from '../helpers/Url';

export default function Home() {
 
  const [datos,setDatos]=useState([])
   const veo = useSelector(state=>state.user)
   console.log(veo);
    const[show,setShow]=useState(false)
  const[info,setInfo]=useState({
    id:"",
    name:""
  })

useEffect(() => {
  getData()

}, [])

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

  return (
    <div >
      <Geo />
      <Carrusel datos={datos}/>
      <div className='containere '>
        {datos.map(pelicula =>(
      <Card style={{ width: '12rem' }} 
      className="mb-2 carta" key={pelicula.id}
       onClick={()=>handleShow(pelicula)}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>
        <Card.Body>
          <p className='voto'>{pelicula.vote_average}<i className="bi bi-star-fill"></i></p>
          <Card.Title className='title'>{pelicula.original_title}</Card.Title>
         <p className='overview'>{pelicula.overview}</p>
        </Card.Body>
      </Card>
  ))}
  <Paginacion/>
      </div>
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
  )
}
