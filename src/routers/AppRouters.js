import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { dispatchUser, gettingUserAsync } from '../redux/actions/actionUserMovies';
import { DashboardRoutes } from './Dashboard';
import { Inicio } from './Inicio';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

function AppRouter() {
 const dispatch= useDispatch()
   const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  
  useEffect(() => {
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {

    if(user?.uid){
      gettingUserAsync(user)
      dispatch (dispatchUser(user))
      setIsLoggedIn(true)
    
    }else{
      setIsLoggedIn(false)
      }
      setChecking(false)
      })
  }, [setIsLoggedIn,setChecking])

  if(checking){
    
    return(
        <h1>Espere...</h1>
    )
  }

  return <BrowserRouter>
            <Routes>
      <Route path='/login/*' element={
      <PublicRoute isAuthenticated={isLoggedIn} >
        <Inicio/>
      </PublicRoute> } />

      <Route path='/*' element={
      <PrivateRoute isAuthenticated={isLoggedIn}>
        <DashboardRoutes/>
      </PrivateRoute> } />

      
      </Routes>
     </BrowserRouter>;
}

export default AppRouter;
