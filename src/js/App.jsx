import React from 'react';
import Sticky from 'react-sticky-el';

import { BrowserRouter } from 'react-router-dom';

import Main from './containers/Main';

import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import LogoBanner from './components/LogoBanner';

import '../styles/App.scss';


// Start app
const App = () => (
  <BrowserRouter basename="/">
    <div>
      <div className="banner-area">
        <Sticky topOffset={-1} stickyStyle={{ zIndex: 10, minWidth: '100%' }}>
          <LogoBanner />
          <Navbar />
          <MobileNavbar />
        </Sticky>
      </div>
      <div className="bodyWrap">
        <Main />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
