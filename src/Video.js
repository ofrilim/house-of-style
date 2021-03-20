import React from 'react';
import { Player } from 'video-react';
import video from './media/house-of-style-video.mp4';
import './Video.scss';

export default function Video() {
  return (
    <div>
      <Player 
        src={video} 
        fluid muted loop autoPlay
      />
    </div>
  )
}
