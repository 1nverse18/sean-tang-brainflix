import Header from './components/Header/Header';
import './App.css';
import VideoDetails from './data/video-details.json';
import SideVideos from './data/videos.json';
import { Component } from 'react';
import Video from './components/Video/Video';
import UnderVideo from './components/UnderVideo/UnderVideo';

class App extends Component {

  newId = (id) => {
    this.setState({videoId: id})
  }

  state = {
    videoId: VideoDetails[0].id
  };

  render() {
    const activeVideo = VideoDetails.findIndex(element => element.id === this.state.videoId);
  
    return (
      <div>
      <Header />
      <Video activeVideo={VideoDetails[activeVideo]} />
      <UnderVideo activeVideo={VideoDetails[activeVideo]}/>
      </div>
    )
  }
}

export default App;
