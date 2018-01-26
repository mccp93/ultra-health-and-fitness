import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Testimonial.scss';

const Testimonial = props =>
  <div className="testimonials-container">
    <div className={props.side === 'top' ? 'testimonial-wrapper-top' : 'testimonial-wrapper'}>
      {props.side === 'top' ? <img className="top-training-image" src={props.image} alt={props.author} /> : null}
      {props.side === 'left' ? <img className="training-image" src={props.image} alt={props.author} /> : null}
      {props.side === 'right' ? <img className="training-image-mobile" src={props.image} alt={props.author} /> : null}
      <div className="testimonial-text-wrapper white">
        <div className="testimonial-text ">
          {props.children}
        </div>
        <div className="testimonial-author-wrapper">
          <img className="testimonial-image" src={props.authorImage} alt={props.author} />
          <div className="testimonial-author">
            {props.author}
          </div>
        </div>
      </div>

      {props.side === 'right' ? <img className="training-image-right" src={props.image} alt={props.author} /> : null}
    </div>
  </div>;

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
};

export default Testimonial;
