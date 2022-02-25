import {doc, getDoc,  setDoc, updateDoc} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typeUser } from "../types/type"




export const gettingUserSyn=(usuario,moviesList)=>{
    return{
        type:typeUser.getCurrentUser,
        payload:{usuario,moviesList}
        
    }
}


export const gettingUserAsync= async (user)=>{

        const showMovies=async()=>{
            
            await setDoc(UserRef,{
                dataOfUser:{
                    email:user.email,
                    name:user.displayName,
                }
                
            })
            
            
            console.log(UserRef.parent);
        }         
    const UserRef = doc(db,`user/${user.email}`);
    const User = await getDoc(UserRef);
    if(User.exists()){
        const dataUser = User.data()
      console.log(dataUser);
    } else{ showMovies() }
 
}

export const dispatchUser=(user)=>{
    return async (dispatch)=>{
        const UserRef = doc(db,`user/${user.email}`);
        const User = await getDoc(UserRef);
        
        const dataUser = User.data()
        const usuario = dataUser.dataOfUser


        const moviesUser = await getDoc(doc(db,`user/${user.email}`))
            const moviee =moviesUser.data().peliculas
                dispatch(gettingUserSyn(usuario,moviee))
            

        console.log(dataUser);
        // dispatch(gettingUserSyn(usuario,moviesList))
        console.log(User);
    }
}

export const newMovieUser= (newMovie)=>{
    return{
        type:typeUser.newMovie,
        payload:newMovie
    }
}

export  const newMovieUserAsync= (email,newMovie)=>{
     return async (dispatch)=>{   
            const moviesUser = await getDoc(doc(db,`user/${email}`))
            // const moviesList = moviesUser.data()
            // const ref = doc(db,"user",email,"personal")
            // const personalUser = collection(db,`user`)
            // await   setDoc(doc(personalUser,email,{
            //     "peliculas":arrayUnion(newMovie)
            // })
            if(moviesUser.data().peliculas){
                console.log("en hora buena");
                const mo = moviesUser.data().peliculas
                const newmovies = [...mo,newMovie]
                console.log(newmovies);

                await updateDoc(doc(db,"user",email),{
                    peliculas: [...newmovies]
                    
                })
                .then(
                 dispatch(newMovieUser(newMovie)))
    
                .finally(()=>{
                    window.location.reload()})
                  
            
              
            }
            else{
                console.log("mmmmm");
            // const mo = moviesUser.data().peliculas
            //     const newmovies = [...mo,{
            //         id: newMovie.id,
            //         image_path: newMovie.image_path,
            //         original_title:newMovie.original_title
            //     }]
                // console.log(newmovies);
                await updateDoc(doc(db,"user",email),{
                    peliculas:[newMovie]
                })   
            .then(
                 dispatch(newMovieUser(newMovie)))
                    
                
            }             
            // console.log(moviesUser.data());
        }
    }


const newMoviesUser= (newArray)=>{
    return{
        type:typeUser.deleteMovie,
        payload:newArray
    }
}

export  const deleteMovie=(email,state,id)=>{
        return async (dispatch)=>{
            const newArray = state.filter(m=>(m.id !== id))
            await updateDoc(doc(db,"user",email),{
                        peliculas: [...newArray]
                    })  
            .then(
                dispatch(newMoviesUser(newArray))
            )
            .finally(()=>{
                    window.location.reload()})
        }
    }

const modificar=(data)=>{
    return{
        type:typeUser.udDataMovie,
        payload:data
    }
}    

export const modificarMovie =(newArray,email)=>{
//     return async(dispatch)=>{
return async (dispatch)=>{
            
            await updateDoc(doc(db,"user",email),{
                        peliculas: newArray
                    })  
            .then(
                dispatch(modificar(newArray))
            )
            .finally(()=>{
                    window.location.reload()})
        }
            
    // }
}

