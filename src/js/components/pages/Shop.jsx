import React from 'react';
import DocumentTitle from 'react-document-title';

import '../../../styles/GymGroup.scss';

const Shop = () => (
  <DocumentTitle title="Shop - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img src="/public/img/headers/clinic-header.png" alt="Small Group Training Header" />
        <div className="group-header-text"> SHOP </div>
      </div>

      <div className="group-main">
        <div className="group-wrapper"> Coming soon! </div>
      </div>
    </div>
  </DocumentTitle>
);

export default Shop;
