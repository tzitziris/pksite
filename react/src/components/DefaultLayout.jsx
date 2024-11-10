import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom'; 

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main> 
      <Footer />
    </div>
  );
};

export default DefaultLayout;

{/* <main>
        <Outlet />
      </main> */}