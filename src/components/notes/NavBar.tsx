import { logout } from '../../actions/auth';
import { useQueryClient } from 'react-query';
import { auth } from '../../firebase.config';

import logoutIcon from '../../assets/icons/logout.png';

export const NavBar = () => {

  const queryClient = useQueryClient();

  const handleLogout = async() => {
    queryClient.removeQueries(["notes"], { exact: true });
    await logout();
  }

  const user = auth.currentUser;

  return (
    <div className='nav'>  
      <div className="nav__left">
        <img src={ user?.photoURL ? user.photoURL : 'asdf' } alt="" />
        <h4> { user?.displayName ? user.displayName : user?.email } </h4>
      </div>
      <div className='nav__button' onClick={ handleLogout }>  
        <span> SingOut </span> 
        <img src={ logoutIcon } alt="logout" />
      </div>
      <hr className='nav__line'/>
    </div>
  )
}
