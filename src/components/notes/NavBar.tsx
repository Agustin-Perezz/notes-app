import { logout } from '../../actions/auth';
import { useQueryClient } from 'react-query';

export const NavBar = () => {

  const queryClient = useQueryClient();

  const handleLogout = async() => {
    queryClient.removeQueries(["notes"], { exact: true });
    await logout();
  }

  return (
    <div>  
      <button onClick={ handleLogout }> singout </button>
    </div>
  )
}
