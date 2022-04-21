import { logout } from '../../actions/auth';

export const NavBar = () => {

  const handleLogout = async() => {
    await logout();
  }

  return (
    <div>  
      <button onClick={ handleLogout }> singout </button>
    </div>
  )
}
