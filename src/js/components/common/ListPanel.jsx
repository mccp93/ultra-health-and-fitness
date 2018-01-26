import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import '../../../styles/ListPanel.scss';

const ListPanel = props => {
  const ListItems = props.items.map(item => <ListItem title={item.title} />);

  return (
    <div className="list-wrapper">
      {ListItems}
    </div>
  );
};

ListPanel.propTypes = {};

export default ListPanel;
