import React from 'react';

import '../../styles/Footer.scss';
import '../../styles/fontawesome/font-awesome.scss';

// Horizontal overflow issue in React-Flexbox-Grid.
// Set maxWidth to 99.6 to solve for now.

const Footer = () => (
  <div className="footerContainer">
    <div className="footerWrapper">
      <div className="footerCol">
        <div className="footerTitle">Contact</div>
        <div className="footerList">
          <ul>
            <li> Ultra Health & Fitness </li>
            <li> Banbridge Business Centre </li>
            <li> 62 Scarva Road, Banbridge </li>
            <li> Tel: +44 (0) 028 4062 9042 </li>
          </ul>
        </div>
      </div>

      <div className="footerCol">
        <div className="footerTitle">USEFUL LINKS</div>
        <div className="footerList">
          <ul>
            <li> Our Staff </li>
            <li> About Us </li>
            <li> Coaching Plans </li>
            <li> Terms & Conditions </li>
          </ul>
        </div>
      </div>

      <div className="footerCol">
        <div className="footerTitle">Social</div>
        <div className="footerList social">
          <div>
            <a className="fa fa-twitter" title="" target="_blank" href="https://www.twitter.com//" /> @UltraGym
          </div>
          <div>
            <a className="fa fa-facebook" title="" target="_blank" href="https://www.facebook.com/" /> @UltraGym
          </div>
          <div>
            <a className="fa fa-instagram" title="" target="_blank" href="https://www.instagram.com/" /> @UltraGym
          </div>
        </div>
      </div>

      <div className="footerCol">
        <div className="footerTitle">INFORMATION</div>
        <div className="footerList">
          <ul>
            <li> About Us </li>
            <li> Terms & Conditions </li>
          </ul>
          <a href="https://www.contentful.com/" rel="nofollow" target="blank">
            <img
              src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
              style={{ maxWidth: '100px', width: '100%' }}
              alt="Powered by Contentful"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">© Copyright 2017 Ultra Health & Fitness</div>
  </div>
);

export default Footer;
