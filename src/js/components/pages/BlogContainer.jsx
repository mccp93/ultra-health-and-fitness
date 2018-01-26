import React from 'react';
import DocumentTitle from 'react-document-title';

import { Switch, Route } from 'react-router-dom';

import BlogIndex from '../common/BlogIndex';
import BlogPost from '../common/BlogPost';

import '../../../styles/GymGroup.scss';

const BlogContainer = () => (
  <DocumentTitle title="Blog - Ultra Health And Fitness">
    <main style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/blog" component={BlogIndex} />
        <Route path="/blog/page/:page" component={BlogIndex} />
        <Route path="/blog/:id" component={BlogPost} />
      </Switch>
    </main>
  </DocumentTitle>
);

export default BlogContainer;
