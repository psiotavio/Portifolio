import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="page-header">
      <div className="logo">
  
      </div>
      <nav>
        <ul>
        <Link className="links" to="/"><li>Home</li> </Link>
        <Link className="links" to="/projects"><li>Projetcs </li></Link>
        <Link className="links" to="/aboutme"><li>About me</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
