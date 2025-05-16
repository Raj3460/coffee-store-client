import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayouts = () => {
       return (
              <div>
              
                     <Header></Header>
                    <div className='px-24 mx-auto'>
                      <Outlet></Outlet>
                    </div>
                     
              </div>
       );
};

export default MainLayouts;