import { logout } from '../../actions/auth';
import { useQueryClient } from 'react-query';
import { auth } from '../../firebase.config';

import logoutIcon from '../../assets/icons/logout.png';
import userIcon from '../../assets/icons/cat.png';

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
        <img src={ userIcon } alt="" />
        <div className="">
          <h4> { user?.displayName ? user.displayName : user?.email } </h4>
          <h6> { user!.email } </h6>
        </div>
      </div>
      <div className='nav__button' onClick={ handleLogout }>  
        <span> Logout </span> 
        <img src={ logoutIcon } alt="logout" />
      </div>
    </div>
  )
}
