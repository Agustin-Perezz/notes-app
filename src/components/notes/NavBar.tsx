import { logout } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  
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
