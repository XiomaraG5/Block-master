
import { typeUser } from '../types/type';


const initialState ={
    dataUser:{},
    userMovies:[]
}

export default function UserMoviesReducer(state=initialState,action) {
    switch (action.type) {
        case typeUser.getCurrentUser:
            return {
                ...state,
                dataUser:action.payload.usuario,
                userMovies:action.payload.moviesList
            }
        case typeUser.newMovie:
            return{
                ...state,
                userMovies:action.payload.newMovie
            }
        case typeUser.deleteMovie:
            return{
                ...state,
                userMovies:action.payload.newArray
            }
            case typeUser.udDataMovie:
                return{
                    ...state,
                    userMovies:action.payload.data
                }
            
        default:
            return initialState
    }
}
