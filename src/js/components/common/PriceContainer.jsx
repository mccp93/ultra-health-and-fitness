import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/PriceContainer.scss';

const PriceContainer = props => (
  <div className="price-wrapper">
    <div className="cost-wrapper">
      <div className="price-title">
        <span>{props.title}</span>
      </div>
      <div className="price-text">{props.description}</div>
      <div className="price-amount">
        <span>
          £{props.price} PER MONTH
          {props.sessions ? <span> FOR {props.sessions} SESSIONS </span> : null}
        </span>
      </div>
    </div>
  </div>
);

PriceContainer.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  sessions: PropTypes.number.isRequired,
};

export default PriceContainer;
