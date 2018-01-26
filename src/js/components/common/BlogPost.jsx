import React from 'react';
import MDSpinner from 'react-md-spinner';
import Moment from 'moment';
import contentfulClient from '../../utils/contentful';

import '../../../styles/BlogPost.scss';
import '../../../styles/GymGroup.scss';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount() {
    this.getPostData();
  }

  getPostData() {
    contentfulClient
      .getEntries({ 'sys.id': this.props.match.params.id })
      .then(apiData => this.setState({ post: apiData.items[0] }));
  }

  render() {
    if (this.state.post) {
      return (
        <div className="group-container">
          <div className="group-main">
            <div className="blog-post-wrapper">
              <div className="blog-post-info-wrapper">
                <div className="blog-post-info">
                  <div className="blog-title-text field"> {this.state.post.fields.title} </div>
                  <div className="blog-author-date">
                    <div className="blog-post-author">{this.state.post.fields.author}</div>
                    <div className="blog-post-date">{Moment(this.state.post.sys.createdAt).format('Do MMM YYYY')}</div>
                  </div>
                </div>
              </div>

              {this.state.post.fields.image ? (
                <div className="image-wrapper">
                  <img
                    className="blog-post-image"
                    src={this.state.post.fields.image.fields.file.url}
                    alt={this.state.post.fields.image.fields.title}
                  />
                </div>
              ) : null}

              <div className="blog-post-content">{this.state.post.fields.content}</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="group-container">
        <div className="group-main">
          <div className="blog-post-loading-wrapper">
            <div className="blog-post-loading-title">
              <MDSpinner singleColor="grey" />
            </div>

            <div className="blog-post-loading-content">
              <MDSpinner className="loading-spinner" singleColor="grey" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
