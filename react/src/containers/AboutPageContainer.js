import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';

class AboutPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    // const videoJsOptions = {
    //   autoplay: false,
    //   controls: true,
    //   sources: [{
    //     src: '/media/videos/Ldyan_demo_dnd.mp4',
    //     type: 'video/mp4'
    //   }]
    // }

    let videos
    let videoLinks = [
      {
        title: 'Drag & Drop functionality',
        link: 'https://www.youtube.com/embed/ziuW9Bh0rcM?rel=0'
      },
      {
        title: 'Custom stateful forms',
        link: 'https://www.youtube.com/embed/lkHg4fdCsxI?rel=0'
      },
      {
        title: 'Virtual conducter playback',
        link: 'https://www.youtube.com/embed/NWfu3H8KXM8?rel=0'
      }
    ]

    videos = videoLinks.map((value, index) => (
      <div className="small-11 small-centered medium-9 medium-centered columns">
        <h1 className="title-show">{value.title}</h1>
        <hr/>
        <iframe width="720" height="405" src={`${value.link}`} frameBorder="0" allowFullScreen></iframe>
        <br/><br/>
      </div>
    ))

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
