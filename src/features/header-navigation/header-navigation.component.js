import React from 'react';
import { Link } from 'react-router-dom';
import homePageConstants from '../../app-config/routes/home.page.route.config/home.page.route.config.constants';
import userRegistrationPageConstants from '../../app-config/routes/user.registration.page.route.config/user.registration.page.route.config.constants';

import './header-navigation.styles.scss';

const Header = () => (
  <>
    <div>
      <ul>
        <li>
          <Link to={homePageConstants.URL}>Home</Link>
        </li>
        <li>
          <Link to="/ads">Ads</Link>
        </li>
        <li>
          <Link to={userRegistrationPageConstants.URL}>Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Header;
