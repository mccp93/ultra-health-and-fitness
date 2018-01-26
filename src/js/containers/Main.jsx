import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';

import Home from '../components/pages/Home';

import GymPersonalTraining from '../components/pages/GymPersonalTraining';
import GymSmallGroup from '../components/pages/GymSmallGroup';
import GymLargeGroup from '../components/pages/GymLargeGroup';
import GymProgrammeDesign from '../components/pages/GymProgrammeDesign';

import Clinic from '../components/pages/Clinic';

import Community from '../components/pages/Community';
import Athletes from '../components/pages/Athletes';
import Blog from '../components/pages/BlogContainer';
import Shop from '../components/pages/Shop';

import Page404 from '../components/pages/Page404';

import '../../styles/Main.scss';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <ScrollToTop>
    <main className="main-wrapper">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />

        <Route path="/gym/personal-training" component={GymPersonalTraining} />
        <Route path="/gym/small-group" component={GymSmallGroup} />
        <Route path="/gym/large-group" component={GymLargeGroup} />
        <Route path="/gym/programme-design" component={GymProgrammeDesign} />

        <Route path="/clinic" component={Clinic} />

        <Route path="/community" component={Community} />

        <Route path="/athletes" component={Athletes} />

        <Route path="/blog" component={Blog} />

        <Route component={Page404} />
      </Switch>
    </main>
  </ScrollToTop>
);

export default Main;
