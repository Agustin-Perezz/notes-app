import { AppRoutes } from "./routes/AppRoutes"
import { Toaster } from 'react-hot-toast';

export const NotesApp = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  )
}
