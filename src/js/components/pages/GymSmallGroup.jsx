import React from 'react';
import DocumentTitle from 'react-document-title';

import Carousel from 'nuka-carousel';
import PriceContainer from '../common/PriceContainer';

import '../../../styles/GymGroup.scss';
import ProductFeaturePanel from '../common/ProductFeaturePanel';

const features = [
  {
    title: 'Soft Tissue Treatment',
    image: '/public/img/small-group/treatment.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Bi-Weekly Body Fat Testing',
    image: '/public/img/small-group/testing.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Individualised Programme',
    image: '/public/img/small-group/programme.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
];

const GymSmallGroup = () => (
  <DocumentTitle title="Small Group Sessions - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img src="/public/img/small-group/small-group-banner.png" alt="Small Group Banner" />
        <div className="group-header-text"> SMALL GROUP TRAINING </div>
      </div>

      <div className="group-main">
        <div className="group-wrapper">
          <div className="carousel-wrapper">
            <Carousel speed="1500">
              <img
                src="/public/img/small-group/small-group.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Group of clients training at gym."
              />
              <img
                src="/public/img/small-group/small-group-2.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Group of clients training at gym."
              />
              <img
                src="/public/img/small-group/small-group-3.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Group of clients training at gym."
              />
            </Carousel>
          </div>
          <img
            className="gym-image-mobile"
            src="/public/img/small-group/small-group-mobile.png"
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
          </div>
        </div>

        <ProductFeaturePanel features={features} />
      </div>
      <PriceContainer
        title="BETTER TOGETHER"
        price="160"
        description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit. Curabitur pretium elementum elementum. Integer elementum ac neque nec faucibus. Sed vestibulum euismod pulvinar. In et iaculis arcu."
        sessions="12"
      />
    </div>
  </DocumentTitle>
);

export default GymSmallGroup;
