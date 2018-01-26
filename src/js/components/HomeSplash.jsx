import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/HomeSplash.scss';

const HomeSplash = props => (
  <div className="splash-container">
    <img src={props.image} className="splash-image" alt={props.title} />
    <div className={`clipped-div-${props.direction}`}>
      <div className="inner-header">
        <span className="ultra-tag">{props.header}</span>
        <span className={`${props.color}-tag`}>{props.title}</span>
      </div>
      <div className={`${props.color}-inner-body`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh dui, ultricies ac ante eget, pulvinar
        convallis risus. Donec sem dui, eleifend sit amet tempor et, semper sit amet nisi. Pellentesque rhoncus
        malesuada tempor.
      </div>
      <a className="a-button-div" href={`/${props.link}`}>
        <div className={`${props.color}-button-div`}>READ MORE</div>
      </a>
    </div>
  </div>
);

HomeSplash.propTypes = {
  image: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HomeSplash;
