
import {  useFormik } from 'formik'
import React, {  useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormChange from '../components/FormChange'
import { MostarPeliculas } from '../components/MostarPeliculas'
import { fileUpload } from '../helpers/Url'
import { newMovieUserAsync } from '../redux/actions/actionUserMovies'
const { v4: uuidv4 } = require('uuid');


export default function Mispeliculas() {
  const dispatch =  useDispatch()
  const [agregarNew,setagregarNew]=useState(false)
  const state = useSelector((state) => state.user.userMovies);
  const state2 = useSelector(state=>state.user.dataUser.email)
  console.log(state2);
  const [newData,setNewData]=useState({})

  
    const formik = useFormik({
            initialValues:{
                image_path:"",
                original_title:"",
                overview:"",
                id: ""
            },
            onSubmit: (data) => {
                setNewData(data)
                console.log(newData);
                setagregarNew(false)
                formik.values.id = uuidv4()
                depachar(data) 
                
            },
        
        })
    const depachar = (data)=>{
        dispatch(newMovieUserAsync(state2,data)) 
    }
    const handleFileChanged = (e) => {
         const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            formik.values.image_path = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

const closeModal =(e)=>{
    e.preventDefault()
    setagregarNew(false)
}
const openModal=(e)=>{
    e.preventDefault()
    setagregarNew(true)
    
}

  return (
    <div className=" contenedorMispeliculas " >
    {agregarNew &&<Form className="form formMovie m-auto mt-5" onSubmit={formik.handleSubmit}>
        <div><i className="bi bi-x-octagon" onClick={closeModal}></i></div>
        <Form.Group className="mb-3">
            <Form.Control type="text"className='inputMovie' placeholder="Enter name" 
            name="original_title"
            onChange={formik.handleChange}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Control type="text" className='inputMovie' placeholder="description" 
            name="overview"
            onChange={formik.handleChange}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>image</Form.Label>
            <Form.Control className='inputMovie file'
            type="file" placeholder="image" 
            name='image_path'
            id="fileSelector"
            onChange={handleFileChanged}
            required
            />
        </Form.Group>
        
        <Button variant="primary" type="submit"  >
            Send
        </Button>
    </Form>}
    {!agregarNew &&<button className='button'onClick={openModal}>
    <i className="bi bi-file-earmark-plus-fill"></i>
    <span> Add new movie </span> 
    </button>}
   {(state !== null)?  <MostarPeliculas state={state}/>:""}
    </div>
  )
}
