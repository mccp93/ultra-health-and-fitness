import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Event from './Event';
import '../../../styles/EventPanel.scss';

const EventPanel = props => {
  const EventItems = props.events.map(event => <Event title={event.title} image={event.image} body={event.body} />);

  const panelSize = props.size;

  const items = _.chunk(EventItems, panelSize).map(group =>
    <div className="event-panel-wrapper">
      {group}
    </div>,
  );

  return (
    <div className="event-row">
      {items}
    </div>
  );
};

EventPanel.propTypes = {};

export default EventPanel;
