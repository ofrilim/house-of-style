import React from 'react';
import Header from './components/Header/Header';
import Appartments from './components/Appartments/Appartments';
import Contact from './components/Contact/Contact';
import VideoBG from './components/Video/Video';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoBG />
      <div style={{position: 'absolute', width: '100%',  marginTop: '45vh'}}>
        <Appartments />
        <Contact />
      </div>
      <WhatsappIcon />
    </div>
  );
}

export default App;
