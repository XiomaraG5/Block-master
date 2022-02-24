import {  useFormik } from 'formik'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fileUpload } from '../helpers/Url'
import { modificarMovie } from '../redux/actions/actionUserMovies'
const { v4: uuidv4 } = require('uuid');

export default function FormChange(newData) {
    const state = useSelector(state=>state.user.userMovies)
  const {image_path,original_title,overview,id} = newData.movie
  const dispatch =  useDispatch()
  const state2 = useSelector(state=>state.user.dataUser.email)
console.log(state2);
  console.log(newData);
  console.log(state);
    const formik = useFormik({
        initialValues:{
            image_path:"",
            original_title:"",
            overview:"",
            id:""
        },
        onSubmit: (data) => {
            console.log(data);
            handleSubmit(data)
        },
    })
    
    const handleFileChanged = (e) => {
         const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            formik.values.image_path = response
            formik.values.id=uuidv4()
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    

    const handleSubmit = (data)=>{
        const moviefilter = state.filter(mo=>(mo.id !== id))
        console.log(moviefilter);
        const newArray= [...moviefilter,data]
        console.log(newArray);
       dispatch (modificarMovie(newArray,state2))
    }

  return (
    <div className=" contenedorMispeliculas " >
    <Form className="form formMovie m-auto " onSubmit={formik.handleSubmit}>
        <Card style={{ width: '18rem' }}className="mb-4 m-auto ">
            <Card.Img  src={image_path} alt="tu peli bb" />
        </Card >
        <Form.Group className="mb-3">
            <Form.Control type="text"className='inputMovie' 
            name="original_title"
            onChange={formik.handleChange}
            placeholder={original_title}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Control type="text" className='inputMovie' 
            name="overview"
            onChange={formik.handleChange}
            placeholder={overview}
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
        
        <Button variant="primary" type="submit" >
        
            Send
        </Button>
        
    </Form>
    
    </div>
  )
}
