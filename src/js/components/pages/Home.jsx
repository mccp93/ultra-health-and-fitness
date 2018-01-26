import React from 'react';
import DocumentTitle from 'react-document-title';

import HomeSplash from '../HomeSplash';

const Home = () => (
  <DocumentTitle title="Home - Ultra Health And Fitness">
    <div className="homeWrapper">
      <HomeSplash
        image="/public/img/splash/gym-splash.png"
        link="gym/small-group"
        header="ULTRA "
        title="FITNESS"
        direction="left"
        color="blue"
      />
      <HomeSplash
        image="/public/img/splash/clinic-splash.png"
        header="ULTRA "
        title="CLINIC"
        link="clinic"
        direction="right"
        color="white"
      />

      <HomeSplash
        image="/public/img/splash/community-splash.png"
        header="ULTRA "
        title="COMMUNITY"
        link="community"
        direction="left"
        color="blue"
      />
      <HomeSplash
        image="/public/img/splash/story-splash.png"
        header="ULTRA "
        title="COACHING"
        link="gym/personal-training"
        direction="right"
        color="white"
      />
      <HomeSplash
        image="/public/img/splash/updates-splash.png"
        header="ULTRA "
        title="UPDATES"
        direction="left"
        link="blog"
        color="blue"
      />
      <HomeSplash
        image="/public/img/splash/coaching-splash.png"
        header="ULTRA "
        title="ATHLETES"
        direction="right"
        link="athletes"
        color="white"
      />
    </div>
  </DocumentTitle>
);

export default Home;
