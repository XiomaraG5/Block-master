import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GetDatas } from '../helpers/Url';
import { DashboardRoutes } from './Dashboard';
import { Inicio } from './Inicio';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

function AppRouter() {
   const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         //console.log(user)
         setIsLoggedIn(true)
        }
        else{
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
