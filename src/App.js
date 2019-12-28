import React, { Component } from 'react';
import './App.css';

import Notification from './Notification/notification';
import Searcher from './Searcher/searcher';

import posts from './posts.json';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.setState({
      posts,
    });
  }

  onSearchHandler = (event) => {
    const filteredPosts = posts.filter(post => post.content.includes(event.target.value));
    this.setState({
      posts: filteredPosts
    });
  }
  render() {
    const notificationsView = this.state.posts.map((post) =>
      <Notification
        key={post.postId}
        content={post.content}
        date={post.date}
        link={post.link}
      />
    )
    return (
      <div className="App">
        <h1 style={{
          'color': 'white'
        }}>JOB NOTIFICATIONS</h1>

        <Searcher change={this.onSearchHandler} />
        {
          notificationsView
        }
      </div>
    );
  }
}

export default App;
