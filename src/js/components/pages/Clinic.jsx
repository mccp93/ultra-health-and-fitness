import React from 'react';
import DocumentTitle from 'react-document-title';

import Carousel from 'nuka-carousel';
import Testimonial from '../common/Testimonial';
import ProductFeaturePanel from '../common/ProductFeaturePanel';

import '../../../styles/Clinic.scss';
import '../../../styles/GymGroup.scss';

const features = [
  {
    title: 'Soft Tissue Work',
    image: '/public/img/clinic/tissue-work.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Massage',
    image: '/public/img/clinic/massage.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
  {
    title: 'Readjustment',
    image: '/public/img/clinic/readjustment.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum aliquam lorem, eget posuere ipsum pulvinar quis. Nunc bibendum urna ac massa eleifend, sit amet dignissim eros blandit.',
  },
];

const items = [
  { title: 'Sporting Injuries' },
  { title: 'Spinal Issues' },
  { title: 'Neck & Back Pain' },
  { title: 'Joint Problems' },
];

const Clinic = () => (
  <DocumentTitle title="Clinic - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img src="/public/img/clinic/clinic-banner.png" alt="Clinic Banner" />
        <div className="group-header-text"> CLINIC </div>
      </div>

      <div className="group-main">
        <div className="group-wrapper">
          <div className="carousel-wrapper">
            <Carousel speed="1500">
              <img
                src="/public/img/clinic/clinic.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Client recieving treatment in clinic."
              />
              <img
                src="/public/img/clinic/clinic-2.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Client recieving treatment in clinic."
              />
              <img
                src="/public/img/clinic/clinic-3.png"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                alt="Client recieving treatment in clinic."
              />
            </Carousel>
          </div>
          <img
            src="/public/img/clinic/clinic-small.png"
            className="clinic-image-small"
            alt="Client in discussion with Aaron."
          />
          <div className="carousel-text">
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

        <Testimonial
          image="/public/img/clinic/clinic-testimonial.png"
          author="Aisling"
          authorImage="/public/img/clinic/aisling.png"
          side="left"
        >
          Last year I was really struggling with what the doctors diagnosed as Chronic Migraine. After months of
          different doctors, physiotherapists and therapies with no relief, I decided to get back into exercise and
          accept living with my condition.
          <br />
          <br />
          Little did I know, the personal trainer I chose to help me would be the best therapist in Northern Ireland.
          Within a few sessions I noticed a difference.
          <br />
          <br />
          Aaron was the first specialist I encountered who actually believed and understood my symptoms. He knew exactly
          what techniques to use to get me back to my normal self. Aaron always checks how you are responding to his
          therapies and adapts his techniques to your individual responses.
          <br />
          <br />
          He also is a big believer in teaching a client how to treat themselves. He is just a really decent guy with an
          unbelievable knowledge of therapies who genuinely wants to help his clients get back to normality.
          <br />
          <br />
          I cannot recommend Aaron enough or thank him enough for giving a 22 year old her life back, without a doubt he
          can fix or help any problem set in front of him and he will make you laugh along the way.
        </Testimonial>
      </div>
    </div>
  </DocumentTitle>
);

export default Clinic;
