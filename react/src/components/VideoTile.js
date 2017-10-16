import React from 'react';

const VideoTile = (props) => {
  let video = props.video
  
  return (
    <div className="small-11 small-centered medium-9 medium-centered columns">
      <h1 className="title-show">{video.title}</h1>
      <hr/>
      <iframe width="720" height="405" src={`${video.link}`} frameBorder="0" allowFullScreen></iframe>
      <br/><br/>
    </div>
  );
}

export default VideoTile;
