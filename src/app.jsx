import React, { Component } from 'react';
import './app.css';
import List from './components/list';
import Navbar from './components/navber/navbar';
import { mostPopular } from './service/youtube'

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Reading', count: 0 },
      { id: 3, name: 'Reading', count: 0 },
    ],
    videoList: [],
  };
  componentDidMount() {
    mostPopular().then(action => {
      const newVideoList = action
      this.setState({ videoList: newVideoList })
    })
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <List
          items={this.state.videoList}
        />
      </>
    );
  }
}

export default App;