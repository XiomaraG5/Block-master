import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { registroAsync } from "../../src/redux/actions/actionRegister";

export default function Registro() {
   const dispatch = useDispatch()
    const swal = require('sweetalert2')

    const [registro, setRegistro] = useState({
        email:"",
        pass2:"",
        nombre:"",
        pass1:""
    })
    const {email,pass2, pass1, nombre}= registro

    const handleInputChange = ({target}) =>{
        setRegistro({
            ...registro,
            [target.name]:target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(pass1===pass2 && pass1.length >6){
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
            })
            dispatch(registroAsync(email,pass1,nombre))
        }else{
            swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegurate que las contraseñas coincidan y contengan mas de 6 caracteres'
            })
        }
        
    }
  return (
  <div className="contenedor">
      <Form onSubmit={handleSubmit} className="form">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="nombre"
                    onChange={handleInputChange}
                    required
                    className="input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    onChange={handleInputChange}
                    required
                    className="input"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="pass1" 
                    onChange={handleInputChange}
                    min="6"
                    required
                    className="input"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRepitPassword">
            <Form.Label>confirm password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="pass2"
                    onChange={handleInputChange}
                    min="6"
                    required
                    className="input"
                />
            </Form.Group>

            <Button className='btn'  type="submit">
                Submit
            </Button>
        </Form>
  </div>);
}
