import './NavBar.css';
import CartWidget from '../card/CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
        <img src="/img/logo.png" alt="Logo" />
        </Link>
{/*         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/categoria/creedence" className="nav-link">Creedence</Link>
            <Link to="/categoria/therollingstones" className="nav-link">The Rolling Stones</Link>
            <Link to="/categoria/thebeatles" className="nav-link">The Beatles</Link>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
