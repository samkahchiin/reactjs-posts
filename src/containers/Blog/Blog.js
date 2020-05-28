import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        <Posts />
      </div>
    );
  }
}

export default Blog;
