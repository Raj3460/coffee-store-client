import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
       return (
              <div className='text-center space-x-3'>
                   header ami ===  <NavLink>home</NavLink>
                     <NavLink to='/addCoffee'>AddCoffee</NavLink>
                     <NavLink to='/signin'>SignIn</NavLink>
                     <NavLink to='/signup'>SignUp</NavLink>
                     
              </div>
       );
};

export default Header;