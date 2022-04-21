import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase.config"

export const ProtectedRoute = ({ children }: any) => {

  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true)

  onAuthStateChanged( auth, ( currentUser ) => {
    setUser( currentUser );
    setLoading( false );
  })

  if ( loading ) return <h1> cheking... </h1>

  if ( !user ) return <Navigate to='/auth' />

  return <> { children } </>
  
}

