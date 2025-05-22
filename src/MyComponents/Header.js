// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ margin: 0 }}>🎵 Music App</h1>
      <nav style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/library">Library</NavLink>
      </nav>
    </header>
  );
};
