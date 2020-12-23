import React, { Component } from 'react';
import './app.css';
import List from './components/list';
import Navbar from './components/navber/navbar';
import { mostPopular, search } from './service/youtube'

class App extends Component {
  state = {
    videoList: [],
  };

  onSearch = (keyword) => {
    console.log("onSearch", keyword)
    search(keyword).then(request => {
      const newVideoList = request
      this.setState({ videoList: newVideoList })
    })
  }

  componentDidMount() {
    mostPopular().then(request => {
      const newVideoList = request
      this.setState({ videoList: newVideoList })
    })
  }

  render() {
    return (
      <>
        <Navbar
          onSearch={this.onSearch}
        />
        <List
          items={this.state.videoList}
        />
      </>
    );
  }
}

export default App;