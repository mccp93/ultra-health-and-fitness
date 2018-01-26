import React from 'react';

import '../../../styles/Event.scss';

const Event = props => (
  <div className="event-wrapper">
    <div className="event-image-container">
      <img className="event-image" src={props.image} alt={props.title} />
    </div>
    <div className="event-body">
      <div className="event-title">{props.title}</div>

      <div className="event-text">{props.body}</div>
    </div>
  </div>
);

export default Event;
