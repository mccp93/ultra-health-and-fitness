import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Athlete from './Athlete';
import '../../../styles/AthletePanel.scss';

const AthletePanel = props => {
  const AthleteItems = props.athletes.map(athlete =>
    <Athlete
      name={athlete.name}
      sport={athlete.sport}
      workout={athlete.workout}
      image={athlete.image}
      body={athlete.body}
      key={athlete.name}
    />,
  );

  const panelSize = props.size;

  const items = _.chunk(AthleteItems, panelSize).map((group, index) =>
    <div className="athlete-panel-wrapper" key={`athlete-group-${index}`}>
      {group}
    </div>,
  );

  return (
    <div className="athlete-row">
      {items}
    </div>
  );
};

AthletePanel.propTypes = {};

export default AthletePanel;
