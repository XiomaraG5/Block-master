import { addDoc, collection } from 'firebase/firestore'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { resgisterAsync } from '../actions/actionMovieRegistre'
import { listMovie } from '../redux/actions/crudMovies/actionMoviesList'
import { db } from '../firebase/firebaseConfig'
import { fileUpload } from '../helpers/Url'

export default function Mispeliculas() {
  const dispatch =  useDispatch()

const [registro, setRegistro] = useState({
        image_path:"",
            original_title:"",
            overview:""
    })
    const {image_path,original_title, overview}= registro

    // const formik = useFormik({
    //     initialValues:{
    //         image_path:"",
    //         original_title:"",
    //         overview:""
    //     },
    //     onSubmit: (data) => {
    //         dispatch(resgisterAsync(data))
    //     },
    // })
    
    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                image_path=response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleInputChange = ({target}) =>{
        setRegistro({
            ...registro,
            [target.name]:target.value
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        const newMovie={
            image_path,
            original_title,
            overview
        }
        addDoc(collection(db,"Peliculas",newMovie))
    }

  return (
    <div className="contenedor">
    <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" 
            name="original_title"
            onChange={handleInputChange}
            required/>
        </Form.Group>

        

        <Form.Group className="mb-3" >
            <Form.Label>description</Form.Label>
            <Form.Control type="text" placeholder="description" 
            name="overview"
            onChange={handleInputChange}
            required/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>image</Form.Label>
            <Form.Control type="file" placeholder="image" 
            name='image_path'
            onChange={handleFileChanged}
            required/>
        </Form.Group>
       

        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>
    </div>
  )
}
