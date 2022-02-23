import React, {  useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import {  useSelector } from 'react-redux'
import { Modaltrailers } from './Modaltrailers'
const { v4: uuidv4 } = require('uuid');


export  const   MovieFilter = ({pelicula})=> {

  const buscar = useSelector(state=>state.user.userMovies)
  const [data,setData]=useState([])
  const [newData,setNewData] =useState([])
  const lis = pelicula.pelicula
   const[show,setShow]=useState(false)
  const[info,setInfo]=useState({
    id:"",
    name:""
  })

useEffect(( )=>{
  function filterItems(para) {
            return data.filter(function(el) {
                return el.original_title.toLowerCase().indexOf(para.toLowerCase()) > -1;
                
            })
            
          }
  const cargar =()=>{
  if(lis !==undefined){
        setNewData(
  filterItems(lis))
  }
  }
  cargar()
},[data,lis,pelicula])

 useEffect(()=>{
    const listarAsyc =  async ()=>{
   const moviesDefault = await getDocs(collection(db,"Peliculas"))
       const mi = moviesDefault.docs.map(el=>el.data())
       const mo =  [...buscar,...mi];
       setData(mo)
       console.log(mo)
       console.log(buscar);
    console.log(mi);
   
 }
  listarAsyc ()
 },[buscar,pelicula])



  console.log(newData);
  
  console.log(buscar);
console.table(data);
console.log(pelicula.pelicula);
  
 

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
    <div className='d-flex flex-wrap gap-3 justify-content-center search'>
      {newData.map(pelicula =>(
      <Card style={{ width: '12rem' }}
      onClick={()=>handleShow(pelicula)}
      className="mb-2 carta" key={uuidv4()}>
        {pelicula.poster_path?<Card.Img variant="top" 
        src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>:
        <Card.Img variant="top" src={pelicula.image_path}/>}
        <Card.Body>
          {pelicula.vote_average &&  <p className='voto'>{pelicula.vote_average}<i className="bi bi-star-fill"></i></p>}
          <Card.Title className='title'>{pelicula.original_title}</Card.Title>
         <p className='overview'>{pelicula.overview}</p>
        </Card.Body>
      </Card>
  ))}
  <Modal  show={show} onHide={handleClose} 
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
