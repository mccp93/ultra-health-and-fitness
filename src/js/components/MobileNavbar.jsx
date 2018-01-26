import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';

import '../../styles/MobileNavbar.scss';

class MobileNavbar extends React.Component {
  state = { isOpened: false, navOpen: false };

  handleClick(event) {
    this.setState({ isOpened: !this.state.isOpened });
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
  }

  navClick(event) {
    this.setState({ navOpen: !this.state.navOpen });
    event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    return (
      <div className="hamburger-container" onClick={e => this.handleClick(e)} role="navigation">
        <div id="nav-icon3" className={this.state.isOpened ? 'open' : null}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="mobile-collapse-menu">
          <Collapse isOpened={this.state.isOpened} fixedHeight={450} hasNestedCollapse springConfig={presets.precision}>
            <ul id="mobile-nav">
              <li>
                <NavLink to="/home" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <div
                className={this.state.navOpen ? 'mobile-nav-menu-open' : 'mobile-nav-menu'}
                onClick={e => this.navClick(e)}
              >
                Gym <span className="caret" />
              </div>
              <Collapse isOpened={this.state.navOpen} springConfig={presets.precision}>
                <li>
                  <NavLink to="/gym/personal-training" activeClassName="selected">
                    Personal Training
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gym/small-group" activeClassName="selected">
                    Small Group
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gym/large-group" activeClassName="selected">
                    Large Group
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gym/programme-design" activeClassName="selected">
                    Programme Design
                  </NavLink>
                </li>
              </Collapse>
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
            </ul>
          </Collapse>
        </div>
      </div>
    );
  }
}

MobileNavbar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

MobileNavbar.defaultProps = {
  isOpened: false,
};

export default MobileNavbar;
