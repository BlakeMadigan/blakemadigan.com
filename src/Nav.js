import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/portfolio">
          <li>Portfolio</li>
          </Link>

      </ul>
    </nav>
  );
}

export default Nav;
