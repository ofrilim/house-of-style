import React from 'react';
// import { Player } from 'video-react';
import video from './house-of-style-video.mp4';
import './Video.scss';
import posterImg from './video-poster-1.png';
import ReactPlayer from 'react-player';

export default function Video() {
  return (
    <div className="video">
      {/* <Player 
        src={video} 
        fluid muted loop autoPlay
      /> */}
      <ReactPlayer
        config={{ file: { attributes: { poster: {posterImg} } } }}
        playing loop controls muted
        url={[ {src: video, type: 'video/mp4'} ]}
      />
    </div>
  )
}
