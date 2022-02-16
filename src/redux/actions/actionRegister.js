import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/type"


export const registroAsync = (email,pass,name)=>{
    return(dispatch)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,pass)
        .then(async({user}) =>{
            await updateProfile(auth.currentUser,{displayName:name})
            dispatch(registerSincrono(email,pass,name))
            const newUser={
                email,
                pass,
                name
            }
            addDoc(collection(db,"user"),newUser)
        })
        .catch(error =>{
            console.log(error);
        })
    }
}


export const registerSincrono = (email,password,name) => {

    return{
       type: types.register,
       payload: {
           email,
           password,
           name
       }
    }
}

