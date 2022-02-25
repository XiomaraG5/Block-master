import {getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";
import { types } from "../types/type";


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
            dispatch(actionLogout())
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
export const actionLogout = ()=>{
    return{
        type:types.logout
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