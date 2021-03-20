import React from 'react';
import Header from './Header';
import Appartments from './Appartments';
import Contact from './Contact';
import VideoBG from './Video';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoBG />
      <Appartments />
      <Contact />
    </div>
  );
}

export default App;
