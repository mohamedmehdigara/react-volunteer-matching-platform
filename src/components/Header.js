import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
          <li>
            <Link to="/opportunities">Opportunities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
