import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { typeMovie } from "../../types/type";


export const listMovie = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "Peliculas")); //desde firebase obtener los documentos
        const datos = []; 
        querySnapshot.forEach((doc) => {
            datos.push({
                ...doc.data() //el obejto .data para traer la estructura de objeto
            })
        });
        dispatch(listSync(datos)); 
    }
}
export const listSync = (data) => {
    return {
        type: typeMovie.list,
        payload: data
    }
}