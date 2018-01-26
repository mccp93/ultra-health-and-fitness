import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import '../../../styles/BlogPostPreview.scss';

const BlogPostPreview = ({ post, onClick }) => (
  <div onClick={onClick} className="blog-wrapper">
    <div className="blog-post-preview-title">{post.fields.title}</div>
    <div className="blog-post-preview-date">{Moment(post.sys.createdAt).format('Do MMM YYYY')}</div>
    <div className="blog-post-preview-author">{post.fields.author}</div>
  </div>
);

BlogPostPreview.propTypes = {
  post: PropTypes.shape({ fields: PropTypes.object, sys: PropTypes.object }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlogPostPreview;
