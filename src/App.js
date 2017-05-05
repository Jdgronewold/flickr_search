import React, { Component } from 'react';
import './App.css';

import Search from './search.jsx';
import Display from './display.jsx';
import Detail from './detail.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      detail: false,
      detailImage: {}
    };

    this.updateFromChild = this.updateFromChild.bind(this);
  }

  updateFromChild(key, value) {
    if(key === "detailImage") {
      this.setState({[key]: value, detail: true});
    } else {
      this.setState({[key]: value});
    }
  }

  detailImage() {
    if (this.state.detail) {
      return (
        <div className="main">
          <Detail updateFromChild={this.updateFromChild} image={this.state.detailImage} />
        </div>
      );
    } else {
      return (
        <div className="main">
          <Search updateFromChild={this.updateFromChild} />
          <Display updateFromChild={this.updateFromChild} images={this.state.images} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flickr Search!</h2>
        </div>
        { this.detailImage() }
      </div>
    );
  }
}

export default App;
