import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])
    
  return <Outlet/>
  
}

export default Layout