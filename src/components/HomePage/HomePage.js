import React, { Component } from 'react';
import Video from '../Video/Video';
import axios from 'axios';


let apiKey = "21f250aa-1b72-4cf4-8711-95c9fb6f8d5f";
class HomePage extends Component {
    
    newId = (id) => {
        this.setState({videoId: id})
      }
    
      state = {
        videoId: null,
        VideoDetails: [],
        videoInfo: []
      };

      getVideo() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + apiKey)
        .then(response => {
            let videoStats = results.data;
            this.setState({
                VideoDetails: videoStats,
                videoId: videoStats[0].id,
            })
        })

        .catch(error => {
            console.log('Error!')
        });
      }

      getVideoDetails(id) {
        axios.get('https://project-2-api.herokuapp.com/videos/' + id + '?api_key=' + apiKey)
        .then(response => {
            let videoInfo = results.data;
            this.setState({
                videoInfo: videoInfo,
            })
        })
        .catch(error => {
            console.log('Error!')
        });
      }

      componentDidUpdate(prevProps, prevState) {
          if(this.state.videoId !== prevState.videoId) {
              this.getVideoDetails(this.state.videoId);
          }

          if(this.props.match.params.id) {
              const videoId = this.props.match.params.id;

              if(prevState.videoId !== videoId) {
                  this.setState({videoId: videoId})
              }
          } else if (!this.props.match.params.id && prevProps.match.params.id) {
              this.setState({videoId: this.state.VideoDetails[0].id})
          }
      }


    
      componentDidMount() {
        document.title = "Sean Tang Brainflix"; 
        this.getVideo();
     }
    
      render() {
        const activeVideo = this.state.VideoDetails.findIndex(element => element.id === this.state.videoId);
      
        return (
          <div>
          <Header />
          <Video activeVideo={VideoDetails[activeVideo]} />
          <UnderVideo activeVideo={VideoDetails[activeVideo]} newId={this.newId} sideVideos={SideVideos}/>
          </div>
        )
      }
}