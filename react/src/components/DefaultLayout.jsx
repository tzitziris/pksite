import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* This renders the matched child routes (like Home, About, etc.) */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
