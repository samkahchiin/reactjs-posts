import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li><NavLink to="/posts/" exact>Home</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>New Post</NavLink></li>
          </ul>
        </header>

        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        {/* Switch ensure that only route is rendered */}
        {/* Switch is removable, just keep it here for reference*/}
        <Switch>
          <Route path="/new-post" component={NewPost} />

          {/* This route must match its nested route as well*/}
          <Route path="/posts" component={Posts} />
        </Switch>

      </div>
    );
  }
}

export default Blog;
