import React from 'react';
import { withRouter } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

import contentfulClient from '../../utils/contentful';

import BlogPostPreview from '../common/BlogPostPreview';

import '../../../styles/BlogIndex.scss';
import '../../../styles/GymGroup.scss';

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, skip: 0, limit: 10, pageNumber: 1 };
    this.postPreviewClicked = this.postPreviewClicked.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
  }

  /* Need to extract the page number from the URL.
  Then calculate how many entries we need to skip based upon that.
  We're removing one because by default skip: 0 is page 1
  If the page number is 0, we disregard this and load the default (skip: 0);
  TODO {param} commenting to this.
  */
  componentDidMount() {
    if (this.props.match.params.page) {
      const pageNum = parseInt(this.props.match.params.page, 10) - 1;
      this.setState(
        { skip: pageNum * this.state.limit, pageNumber: parseInt(this.props.match.params.page, 10) },
        this.getPostData
      );
    } else {
      this.setState({ skip: 0, pageNumber: 1 }, this.getPostData);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.page) {
      this.setState({ pageNumber: parseInt(newProps.match.params.page, 10) }, this.getPostData);
    } else {
      this.setState({ skip: 0, pageNumber: 1 }, this.getPostData);
    }
  }

  // We only want the blog component to update when there is new blog data present.
  // This is to prevent unnecessary re-renders.
  shouldComponentUpdate(newProps, newState) {
    if (this.state.data === newState.data) {
      return false;
    }

    // If we're trying to access an invalid page, we'll redirect to a 404 page.
    if (newState.data.total === 0) {
      this.props.history.push(`/error`);
    }

    return true;
  }

  getPostData() {
    contentfulClient
      .getEntries({
        limit: this.state.limit,
        skip: this.state.skip,
        order: 'sys.createdAt'
      })
      .then(apiData => this.setState({ data: apiData }));
  }

  postPreviewClicked(id, event) {
    this.props.history.push(`/blog/${id}`);
  }

  nextPage() {
    const pageNum = this.state.pageNumber + 1;
    this.setState({ skip: this.state.skip + 10 });
    this.props.history.push(`/blog/page/${pageNum}`);
  }

  lastPage() {
    const pageNum = this.state.pageNumber - 1;
    this.setState({ skip: this.state.skip - 10 });
    this.props.history.push(`/blog/page/${pageNum}`);
  }

  render() {
    if (this.state.data) {
      const posts = this.state.data.items;
      const blogPosts = posts.map(post => (
        <BlogPostPreview post={post} onClick={event => this.postPreviewClicked(post.sys.id, event)} key={post.sys.id} />
      ));

      return (
        <div className="group-container">
          <div className="group-header-wrapper">
            <img src="/public/img/blog/blog-banner.png" alt="Blog banner." />
            <div className="group-header-text"> BLOG </div>
          </div>
          <div className="blog-preview-wrapper">
            <div className="blog-preview-background">{blogPosts}</div>
          </div>
          <div className="button-container">
            {this.state.skip === 0 ? null : (
              <button className="previous-button" onClick={this.lastPage}>
                Previous Page
              </button>
            )}

            {this.state.data.total !== 0 ? (
              <div className="page-number">
                Page {this.state.pageNumber} of {Math.ceil(this.state.data.total / this.state.data.limit)}
              </div>
            ) : null}

            {(this.state.data.total - this.state.data.skip) / this.state.data.limit > 1 ? (
              <button className="next-button" onClick={this.nextPage}>
                Next Page
              </button>
            ) : null}
          </div>
        </div>
      );
    }

    return (
      <div className="group-container">
        <div className="group-header-wrapper">
          <img src="/public/img/headers/blog_header.png" alt="Blog banner background." />
          <div className="group-header-text"> BLOG </div>
        </div>
        <div className="blog-preview-wrapper">
          <div className="blog-preview-background">
            <div className="preview-container">
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="lightgrey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="grey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="lightgrey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="grey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="lightgrey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="grey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="lightgrey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="grey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="lightgrey" />
              </div>
              <div className="blog-post-preview-loading">
                <MDSpinner singleColor="grey" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogIndex);
