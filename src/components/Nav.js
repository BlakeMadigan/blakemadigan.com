import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active" className="main-nav">
      <span class="material-icons ">
      home
      </span>
      </NavLink>
      <ul className="nav-links">
          <NavLink to="/portfolio" exact className="main-nav" activeClassName="active">
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/about" exact activeClassName="active" className="main-nav">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact" exact activeClassName="active" className="main-nav">
            <li>Contact</li>
          </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
