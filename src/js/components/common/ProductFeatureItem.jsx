import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/ProductFeatureItem.scss';

const ProductFeatureItem = props => (
  <div className="product-feature-container">
    <div className="product-feature-body">
      <div className="product-image-wrapper">
        <img className="product-image" src={props.image} alt={props.title} />
      </div>
      <div className="product-feature-title">{props.title}</div>
      <div className="product-feature-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum
        pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.
      </div>
    </div>
  </div>
);

ProductFeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductFeatureItem;
