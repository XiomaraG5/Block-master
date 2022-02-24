
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteMovie } from "../redux/actions/actionUserMovies";
import FormChange from "./FormChange";
const { v4: uuidv4 } = require("uuid");

export const MostarPeliculas = ({state}) => {
  
  const dispatch = useDispatch();
  const state2 = useSelector((state) => state.user.dataUser.email);
  const [modal, setModal] = useState(false);
  const [newData, setNewData] = useState({
    ActualMovie:{},
    newMovie:[]
  });

  const modalChange = (e) => {
    e.preventDefault();
    setModal(true);
    window.scrollTo(0,0)
    const id = e.target.getAttribute("id");
    const movieFind =state.find(mo=>(mo.id ===id))
    setNewData(
      newData.ActualMovie=movieFind
    )
    console.log(movieFind);
    console.log(id);
  };

  const modalclose = (e) => {
      setModal(false);
    };
const handleDelete =(e)=>{
  
      Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
     
     const id = e.target.getAttribute("id");
    dispatch(deleteMovie(state2,state,id))
   
    }})  
    
}

  return (
<>
{modal && (
  <div className=" contenedorMispeliculas ">
    <div className="form formMovie  w-50 m-auto mb-0">
      <i className="bi bi-x-octagon" onClick={modalclose}></i>
    </div>
    <FormChange movie={newData} />
  </div>
)}
<Container className="mt-5 pelis">
 {state &&<Stack>
  { state.map((ele) => (
    <div key={uuidv4()}>
      {ele &&<Row className="peliculauser">
        <Col className="contendorPelis">
          <img className="imgUser" src={ele.image_path} alt="ok"/>
        </Col>
        <Col className="contendorPelis">
          <h3>{ele.original_title}</h3>
        </Col>
        <Col className="contendorPelis">
          <p>{ele.overview}</p>
        </Col>
        <Col className="contendorPelisbtn">
          <button id={ele.id} 
          className="btnMostrarMovie"
          onClick={handleDelete}>
            <i className="bi bi-trash"id={ele.id}></i>
          </button>
          <button id={ele.id}
          className="btnMostrarMovie"
          onClick={modalChange}>
            <i className="bi bi-pencil" id={ele.id}></i>
          </button>
        </Col>
      </Row>}
      <hr />
    </div>
  ))}
  </Stack>}
</Container>
</>
  );
};
