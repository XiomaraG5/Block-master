import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { shallow } from 'enzyme';
import { MovieFilter } from '../components/movieFilter';
import {fileUpload} from '../helpers/Url'
import { shallowToJson } from 'enzyme-to-json';
import { gettingUserSyn, newMovieUser } from '../redux/actions/actionUserMovies';
import { types, typeUser } from '../redux/types/type';


describe('Verificaciones de CRUD', () => {
    test('Verificar agregar nueva pelicula', ()=>{
       const array ={
               id:1,
               name:"movie1",
               trailes:"trailer"
       }
       const data = newMovieUser(array)
       expect(data).toEqual({
           type: typeUser.newMovie,
          payload: array
       })
    
    });
    test('Traer informacion de usuario y listado de usuario', ()=>{
        const moviesList = {  
            id:1,
            name:"movie1",
            trailes:"trailer"}
    
        const usuario ={
            email: "pepito@gmail.com",
            name:"Ramiro"
        }
    const data = gettingUserSyn(usuario,moviesList) 
    expect(data).toEqual({
        type: typeUser.getCurrentUser,
        payload:{
            usuario,
            moviesList
        }
    })
    })
})







