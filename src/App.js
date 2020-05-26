import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
// Use this to wrap the component that you want to enable routing
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
