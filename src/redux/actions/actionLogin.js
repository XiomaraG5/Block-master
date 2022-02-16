import {getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db, google } from "../../firebase/firebaseConfig";
import { types } from "../types/type";
import { registroAsync } from "./actionRegister";


export const loginGoogleAsync = ()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) =>{
            dispatch(actionLogin(user.uid, user.displayName)) 
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
export const loginEmailAsync = (email,pass)=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,pass)
        .then(({user}) =>{
            console.log(user);
            // dispatch(actionLogin(user.uid, user.displayName))
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
export const logoutAsync=()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signOut(auth)
        .then((user)=>{
            console.log("chao");
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
export default function actionLogin(id,displayname) {
    return{
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}

// const actionLoginEmail =(email,password)=>{
//     return{
//         type: types.login,
//         payload:{
//             id,
            
//         }
//     }
// }