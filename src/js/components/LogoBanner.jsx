import React from 'react';

import '../../styles/LogoBanner.scss';

const LogoBanner = () => (
  <div className="logo-banner">
    <div>
      <img className="logo-image" src="/public/img/ultra_logo.png" alt="Ultra Health & Fitness Logo" />
      <div className="logo-sub-text"> Beyond Ordinary Fitness </div>
    </div>
  </div>
);

export default LogoBanner;
