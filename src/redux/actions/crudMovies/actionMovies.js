import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typeMovie } from "../../types/type"








export const deleteMovie =(id)=>{
    return async (dispatch)=>{
        const estCollection = collection(db,"peliculas");
        const q = query(estCollection, where("id","==",id))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu)=>{
            console.log(docu.id);
            deleteDoc(doc(db,"peliculas",docu.id))
            .then(res=>{
                res.json()
            })
        })
    }
}


export const deleteSincrono = (id)=>{
    return{
        type:typeMovie.delete,
        payload:id
    }
}
