import React from 'react';
import Head from 'next/head';

import Footer from './Footer'; 
import SecondNavbar from './Navbar';
import FirstNavbar from './secondNavbar';

 
  


const Layout = ({ children }) => {
  return (
    <div className="layout">
     <div>
     <FirstNavbar />   
     </div>
      <Head> 
        <title>POST UTME Store</title>
      </Head>
      <header>
      <SecondNavbar />       
      </header> 

      <main className="main-container">
   
        {children} 
      </main>
      <footer> 
   
        <Footer /> 
      </footer>
    </div>
  )
}

export default Layout

 