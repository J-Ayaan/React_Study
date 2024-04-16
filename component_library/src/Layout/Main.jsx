// Main.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Outlet /> {/* Render content of the current route */}
    </main>
  );
};


export default Main;
