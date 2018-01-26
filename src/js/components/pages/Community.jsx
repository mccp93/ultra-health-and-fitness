import React from 'react';
import DocumentTitle from 'react-document-title';

import '../../../styles/Community.scss';
import '../../../styles/GymGroup.scss';

import EventPanel from '../common/EventPanel';

const events = [
  {
    title: 'Mindfulness Meditation',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Quisque aliquet odio nulla, eget tempor eros pretium non. Nam et magna accumsan, 
       tincidunt purus non, pretium turpis. Maecenas velit massa, condimentum non quam ac, 
       rutrum efficitur turpis. Donec imperdiet magna velit, sed tempor lectus pellentesque nec. 
       Vestibulum commodo neque vitae leo sollicitudin, in ullamcorper magna porttitor. 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nisl nec sapien dignissim,
        non ultricies erat varius. Proin efficitur mauris eget condimentum rhoncus. 
        Vestibulum condimentum velit vel massa fermentum mollis. Mauris placerat massa quis diam v
        estibulum, eu gravida mi egestas.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nisl nec sapien dignissim,
        non ultricies erat varius. Proin efficitur mauris eget condimentum rhoncus. 
        Vestibulum condimentum velit vel massa fermentum mollis. Mauris placerat massa quis diam v
        estibulum, eu gravida mi egestas.`,
    image: '/public/img/community/meditation.png',
  },
  {
    title: 'Specialised Training',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet odio nulla, eget tempor eros pretium non. Nam et magna accumsan, tincidunt purus non, pretium turpis. Maecenas velit massa, condimentum non quam ac, rutrum efficitur turpis. Donec imperdiet magna velit, sed tempor lectus pellentesque nec. Vestibulum commodo neque vitae leo sollicitudin, in ullamcorper magna porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nisl nec sapien dignissim, non ultricies erat varius. Proin efficitur mauris eget condimentum rhoncus. Vestibulum condimentum velit vel massa fermentum mollis. Mauris placerat massa quis diam vestibulum, eu gravida mi egestas.',
    image: '/public/img/community/training.png',
  },
  {
    title: 'Informative Talks',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet odio nulla, eget tempor eros pretium non. Nam et magna accumsan, tincidunt purus non, pretium turpis. Maecenas velit massa, condimentum non quam ac, rutrum efficitur turpis. Donec imperdiet magna velit, sed tempor lectus pellentesque nec. Vestibulum commodo neque vitae leo sollicitudin, in ullamcorper magna porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nisl nec sapien dignissim, non ultricies erat varius. Proin efficitur mauris eget condimentum rhoncus. Vestibulum condimentum velit vel massa fermentum mollis. Mauris placerat massa quis diam vestibulum, eu gravida mi egestas.',
    image: '/public/img/community/speakers.png',
  },
  {
    title: 'Charity Support',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet odio nulla, eget tempor eros pretium non. Nam et magna accumsan, tincidunt purus non, pretium turpis. Maecenas velit massa, condimentum non quam ac, rutrum efficitur turpis. Donec imperdiet magna velit, sed tempor lectus pellentesque nec. Vestibulum commodo neque vitae leo sollicitudin, in ullamcorper magna porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nisl nec sapien dignissim, non ultricies erat varius. Proin efficitur mauris eget condimentum rhoncus. Vestibulum condimentum velit vel massa fermentum mollis. Mauris placerat massa quis diam vestibulum, eu gravida mi egestas.',
    image: '/public/img/community/charity.png',
  },
];

const Events = () => (
  <DocumentTitle title="Community - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img src="/public/img/community/community-banner.png" alt="Community banner" />
        <div className="group-header-text"> COMMUNITY </div>
      </div>

      <EventPanel events={events} size={2} />
    </div>
  </DocumentTitle>
);

export default Events;
