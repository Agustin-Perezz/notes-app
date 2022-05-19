import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthPage, NotesPage } from '../pages/';
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter basename="/notes-app">
      <Routes>
        <Route path="/auth/" element={ <AuthPage /> } />
        <Route 
          path="/notes/"
          element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>   
          }
        />
        <Route path="*" element={ <Navigate replace to='/auth/' /> } />
      </Routes>
    </BrowserRouter>
  )
}
