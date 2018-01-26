import React from 'react';
import DocumentTitle from 'react-document-title';

import PriceContainer from '../common/PriceContainer';
import ProductFeaturePanel from '../common/ProductFeaturePanel';

const features = [
  {
    title: 'Monthly Review',
    image: '/public/img/programme-design/monthly-review.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Open Gym Access',
    image: '/public/img/programme-design/open-gym.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Monthly Fat Testing',
    image: '/public/img/programme-design/body-fat-testing.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Monthly Programmes',
    image: '/public/img/programme-design/monthly-programme.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
];

const GymProgrammeDesign = () => (
  <DocumentTitle title="Programme Design - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img src="/public/img/programme-design/programme-design-banner.png" alt="Programme Design Banner" />
        <div className="group-header-text"> PROGRAMME DESIGN </div>
      </div>

      <div className="group-main">
        <div className="group-wrapper">
          <img
            className="group-image"
            src="/public/img/programme-design/programme-design.png"
            alt="People training in gym"
          />
          <div className="group-body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada accumsan sapien at mattis. Etiam
            nisl turpis, elementum eget felis sit amet, molestie pulvinar augue. Etiam nec ex ac lorem tempus accumsan.
            Aliquam rhoncus congue massa viverra facilisis. Nulla pulvinar cursus ex nec molestie. Suspendisse
            ullamcorper urna vitae arcu finibus bibendum. Integer auctor, sem ut scelerisque vulputate, justo libero
            mollis metus, a efficitur nulla massa in ligula. Aenean malesuada accumsan sapien at mattis. Etiam nisl
            turpis, elementum eget felis sit amet, molestie pulvinar augue. Etiam nec ex ac lorem tempus accumsan.
            Aliquam rhoncus congue massa viverra facilisis.
            <br />
          </div>
        </div>

        {/* Pass into it an array containing features w/ image, title and desc */}
        <ProductFeaturePanel features={features} />
      </div>
      <PriceContainer
        title="Designed For You"
        price="70"
        description="An individual programme will be composed designed to fit your specific goals along with a monthly review to see if anything needs to be adjusted or worked on."
      />
    </div>
  </DocumentTitle>
);

export default GymProgrammeDesign;
