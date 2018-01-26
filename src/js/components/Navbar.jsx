import React from 'react';
import { NavLink } from 'react-router-dom';

import NavMenuButton from '../components/common/NavMenuButton';
import '../../styles/Navbar.scss';

// The Header creates links that can be used to navigate between routes.
const Navbar = () => (
  <div id="nav">
    <li>
      <NavLink to="/home" activeClassName="selected">
        Home
      </NavLink>
    </li>
    <NavMenuButton
      value="Gym"
      menuValues={[
        ['Personal Training', 'gym/personal-training'],
        ['Small Group', 'gym/small-group'],
        ['Large Group', 'gym/large-group'],
        ['Programme Design', 'gym/programme-design'],
      ]}
    />
    <li>
      <NavLink to="/clinic" activeClassName="selected">
        Clinic
      </NavLink>
    </li>
    <li>
      <NavLink to="/community" activeClassName="selected">
        Community
      </NavLink>
    </li>

    <li>
      <NavLink to="/athletes" activeClassName="selected">
        Athletes
      </NavLink>
    </li>
    <li>
      <NavLink to="/blog" activeClassName="selected">
        Blog
      </NavLink>
    </li>
  </div>
);

export default Navbar;
