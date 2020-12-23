import React, { Component } from 'react';
import './app.css';
import List from './components/list';
import Navbar from './components/navber/navbar';
import { mostPopular, search } from './service/youtube'

class App extends Component {
  state = {
    videoList: [],
    videoId: ''
  };

  onSearch = (keyword) => {
    console.log("onSearch", keyword)
    search(keyword).then(request => {
      const newVideoList = request
      this.setState({
        videoList: newVideoList,
        videoId: ''
      })
    })
  }

  onPlayVideo = (videoId) => {
    this.setState({ videoId })
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
        <div className="video-container">
          {this.state.videoId ?
            <iframe id="ytplayer" type="text/html" width="720" height="405"
              src={`https://www.youtube.com/embed/${this.state.videoId}`}
              frameborder="0" allowfullscreen /> :
            ''}
        </div>
        <List
          items={this.state.videoList}
          onPlayVideo={this.onPlayVideo}
        />
      </>
    );
  }
}

export default App;