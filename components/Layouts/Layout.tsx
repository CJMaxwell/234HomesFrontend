import React from 'react';
import Navbar from '../Organisms/Navbar';
import Footer from '../templates/Footer';


const Layout: React.FC = ({ children }) => {
  return (
    <>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      {children}
      <Footer />
    </>
  )
}

export default Layout
