import React from 'react';
// import { Player } from 'video-react';
import video from './media/house-of-style-video.mp4';
import './Video.scss';
import ReactPlayer from 'react-player';

export default function Video() {
  return (
    <div className="video">
      {/* <Player 
        src={video} 
        fluid muted loop autoPlay
      /> */}
      <ReactPlayer
        playing
        loop
        controls
        muted
        width="100%"
        height="100%"
        url={[
          {src: video, type: 'video/mp4'},
        ]}
      />
    </div>
  )
}
