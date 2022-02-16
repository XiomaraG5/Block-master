import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginEmailAsync, loginGoogleAsync } from "../redux/actions/actionLogin";

export default function Login() {

  const dispatch = useDispatch();
  const [registro, setRegistro] = useState({
      email:'',
      pass:''
  })

  const {email,pass}=registro;

  const handleInputChange=({target})=>{
      setRegistro({
          ...registro,
          [target.name]:target.value
      })
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginEmailAsync(email,pass))
  }

    const handleGoogleAsincrono=()=>{
        dispatch(loginGoogleAsync())
    }

   


  return (
    <div className="contenedor">
        <Form onSubmit={handleSubmit} className="form" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                 type="email" 
                 placeholder="Enter email" 
                 name='email'
                 onChange={handleInputChange}
                 className="input"
                />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                name='pass'
                onChange={handleInputChange}
                className="input"
                 />
            </Form.Group>
            <Container className='d-flex align-items-center '>
                <Container
                    className="google-btn"

                   onClick={()=>handleGoogleAsincrono()}
                >
                    <Container className="google-icon-wrapper"  >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
           
            <Button  type="submit" className='btn'>
                Ingresar
            </Button>
             </Container>
            
        </Form>
    </div>
    );
}
