// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <main className="main">
        <Outlet /> {/* Renders nested routes */}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
