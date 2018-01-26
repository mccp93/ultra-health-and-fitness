import React from 'react';
import PropTypes from 'prop-types';

import ProductFeatureItem from './ProductFeatureItem';
import '../../../styles/ProductFeaturePanel.scss';

const ProductFeaturePanel = props => {
  const ProductFeatures = props.features.map(feature => (
    <ProductFeatureItem image={feature.image} title={feature.title} description={feature.description} />
  ));

  return <div className="product-feature-wrapper">{ProductFeatures}</div>;
};

ProductFeaturePanel.propTypes = {
  features: PropTypes.array.isRequired,
};

export default ProductFeaturePanel;
