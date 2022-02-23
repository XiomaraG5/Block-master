import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Modaltrailers } from '../components/Modaltrailers';
import { API_URL } from '../helpers/Url'
const { v4: uuidv4 } = require('uuid');

function MasValoradas() {
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
          setDatos(res.data.results)
      })
      .catch(error =>{console.log(error);})
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
    console.log(datos);
    console.log(info);
  return (
    <div className='contendorCaja'>
    <div  className='d-flex flex-wrap justify-items-center align-items-center m-auto gap-2 '>
      {datos.map(pelicula =>(
        <div className='cards' > 
      {pelicula.vote_average >6?<Card style={{ width: '12rem' }}
       className="mb-2 carta" key={uuidv4()}
       onClick={()=>handleShow(pelicula)}>
        <Card.Img variant="top" 
        src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}
        />
        <Card.Body>
        <p className='voto'>{pelicula.vote_average}
          <i className="bi bi-star-fill"></i>
        </p>
        <Card.Title className='title'>{pelicula.original_title}</Card.Title>
        <p className='overview'>{pelicula.overview}</p>
        </Card.Body>Close
        
      </Card>:""}
      </div>
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
    <button onClick={showMore} className='btn'>show more</button>
    </div>
  )
}

export default MasValoradas