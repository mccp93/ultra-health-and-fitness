import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/ListItem.scss';

const ListItem = props =>
  <div className="list-item-container">
    <div className="list-item-text">
      {props.title}
    </div>
  </div>;

ListItem.propTypes = {};

export default ListItem;
