import React, { Component } from 'react';
import VideoTile from '../components/VideoTile';

class AboutPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLinks: [
        {
          id: 1,
          title: 'Drag & Drop functionality',
          link: 'https://www.youtube.com/embed/ziuW9Bh0rcM?rel=0'
        },
        {
          id: 2,
          title: 'Custom stateful forms',
          link: 'https://www.youtube.com/embed/lkHg4fdCsxI?rel=0'
        },
        {
          id: 3,
          title: 'Virtual conducter playback',
          link: 'https://www.youtube.com/embed/NWfu3H8KXM8?rel=0'
        }
      ]
    }
  }

  render() {
    let videos = this.state.videoLinks.map(video => {
      return(
        <VideoTile
          key={video.id}
          video={video}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-11 small-centered medium-9 medium-centered columns">
          <br/><br/><br/><br/><br/><br/><br/>
          <div className="ldyan-title">
            <span id="ldyan-name" className="ldyan-green">AB</span>
            <span id="ldyan-name" className="ldyan-red">O</span>
            <span id="ldyan-name" className="ldyan-pink">UT</span>
          </div>
          <br/><br/>
        </div>
        {videos}
        {/* <div className="small-11 small-centered medium-9 medium-centered columns">
          <VideoPlayer { ...videoJsOptions } />
          <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" data-setup="{}">
            <source src="/media/videos/Ldyan_demo_dnd.mp4" type='video/mp4'>
            </source>
          </video>
        </div> */}
        <br/><br/><br/>
      </div>
    )
  }
}

export default AboutPageContainer;
