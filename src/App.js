import React from 'react';
import Header from './Header';
import Appartments from './Appartments';
import Contact from './Contact';
import { Player } from 'video-react';
import video from './media/house-of-style-video.mp4';

function App() {
  return (
    <div className="App">
      <Header />
      <Player 
        src={video} 
        fluid muted loop autoPlay
        />
        {/* style={{position: "fixed", top: "100", zIndex: "-1", width: "50%", padding: "0"}} */}
      <Appartments />
      <Contact />
    </div>
  );
}

export default App;
