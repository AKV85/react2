import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../buttons/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
    return (
        <div className="navbar">
          <MyButton onClick={() =>setIsAuth(false)}>
            Log Out
          </MyButton>
        <div className="navbar__links">
          <Link to="/about">About site</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      );
}
 
export default Navbar;