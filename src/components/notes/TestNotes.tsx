import { logout } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';


export const TestNotes = () => {
  
  const navigate = useNavigate();

  // mejorar mas adelante
  const handleLogout = async() => {
    await logout();
    navigate('/auth/');
  }

  return (
    <div>  
      <button onClick={ handleLogout }> singout </button>
    </div>
  )
}
