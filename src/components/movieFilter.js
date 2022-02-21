import React, {  useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import {  useSelector } from 'react-redux'
const { v4: uuidv4 } = require('uuid');


export  const   MovieFilter = ({pelicula})=> {
  

  
       const buscar = useSelector(state=>state.user.userMovies)
  const [data,setData]=useState([])
  const [newData,setNewData] =useState([])
  
 
const lis = pelicula.pelicula

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
},[data,lis])

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
console.log(data);
console.log(pelicula.pelicula);
  
 




  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center search'>
      {newData.map(pelicula =>(
      <Card style={{ width: '12rem' }} className="mb-2" key={uuidv4()}>
        {pelicula.poster_path?<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280`+pelicula.poster_path}/>:
        <Card.Img variant="top" src={pelicula.image_path}/>}
        <Card.Body>
          <Card.Title>{pelicula.original_title}</Card.Title>
         
        </Card.Body>
      </Card>
  ))}
    </div>
  )
}
