import React from 'react';
import Nav from './Component/Navbar/Nav';

import { Outlet } from 'react-router';

import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
   
   

   
   
    </>
    );
}

export default App;