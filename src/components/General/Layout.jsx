import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';  // Assuming this is enabled later
import Blog from '../../Pages/Products/Blog';
import About from '../../Pages/About/About';

function Layout() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    console.log("Layout rendered for:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main><Outlet/></main> 

      <footer>
        
      </footer>
    </>
  );
}

export default Layout;
