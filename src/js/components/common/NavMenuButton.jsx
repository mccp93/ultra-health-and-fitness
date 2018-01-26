import React from 'react';
import PropTypes from 'prop-types';
import { presets } from 'react-motion';

import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import '../../../styles/NavMenuButton.scss';

class NavMenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    this.setState({ isOpened: !this.state.isOpened });
  }

  handleBlur(event) {
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ isOpened: false });
      }
    }, 0);
  }

  render() {
    const { isOpened } = this.state;

    const navItems = this.props.menuValues.map(menuItem =>
      <li key={menuItem[1]}>
        <NavLink to={`/${menuItem[1]}`} className="menuitem-button" role="menuitem">
          {menuItem[0]}
        </NavLink>
      </li>,
    );

    return (
      <div className="menu-li" onBlur={this.handleBlur} onClick={this.handleClick} tabIndex={0} role="menuitem">
        {this.props.value} <span className="dropdown" />
        <Collapse id="collapse-menu" isOpened={isOpened} springConfig={presets.precision}>
          {navItems}
        </Collapse>
      </div>
    );
  }
}

NavMenuButton.propTypes = {
  value: PropTypes.string.isRequired,
  menuValues: PropTypes.arrayOf(String).isRequired,
};

NavMenuButton.defaultProps = {
  isOpened: false,
};

export default NavMenuButton;
