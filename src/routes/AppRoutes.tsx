import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthPage, NotesPage } from '../pages/';
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/notes/"
          element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>   
          }
        />
        <Route path="/auth/" element={ <AuthPage /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}
