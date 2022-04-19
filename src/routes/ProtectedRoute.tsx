import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase.config"

export const ProtectedRoute = ({ children }: any) => {

  // cambiar mas adelante
  const user = auth.currentUser;

  if ( !user ) return <Navigate to='/auth' />

  return <> { children } </>
  
}

