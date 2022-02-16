import React from 'react'
import { typeMovie } from '../types/type';
const initialState ={
    movies: []
}
export const MoviesReducer=(state =initialState,action)=> {
  switch (action.type) {
      case typeMovie.register:
          return{
              movies: [action.payload]
          }
         
        case typeMovie.list:
            return{
                movies: [...action.payload]
            }
        case  typeMovie.delete:
            return{
                movies:state.movies.filter(e=>e.id !== action.payload)
            }
      default:
          return state
  }
}
