import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    console.log(this.props)
    axios.get("/posts")
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPost = posts.map(post => {
          return {
            ...post,
            author: "Max"
          }
        })
        this.setState({
          posts: updatedPost
        })
      })
      .catch(error =>
        console.log(error)
        // this.setState({ error: true })
      )
  }

  postSelectedHandler = (id) => {
    // history.push will pushes a new entry into the history stack => redirecting
    // the user to another route
    // NOTE: It have to be rendered by the React router
    // You can alos use <Redirect /> components
    this.props.history.push('/' + id)
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>
        )
      });
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;
