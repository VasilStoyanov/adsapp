import React from 'react';
import { Link } from 'react-router-dom';

import('./header-navigation.styles.scss');

const Header = () => (
  <>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ads">Ads</Link>
        </li>
        <li>
          <Link to="/user/registration">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Header;
