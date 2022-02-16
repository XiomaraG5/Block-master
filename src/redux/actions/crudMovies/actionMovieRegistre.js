import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typeMovie } from "../../types/type"

export const resgisterAsync = (newMovie)=>{
    return(dispatch)=>{
        addDoc(collection(db,"Peliculas"),newMovie)
        .then(resp=>{
            dispatch(resgisterSincrono(newMovie))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const resgisterSincrono = (data)=>{
    return{
        type:typeMovie.register,
        payload:data
    }
}
