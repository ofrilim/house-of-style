// https://www.pngfind.com/mpng/bhhxRi_whatsapp-logo-image-whats-app-logo-svg-hd/
import React from 'react';
import whatsappIcon from './whatsapp.png';

export default function WhatsappIcon() {
  const whatsappStyles = {
    width: "60px", 
    position: "fixed", 
    bottom: "1.5rem", 
    right: "0.5rem", 
    cursor: "pointer"
  }

  return (
    <div>
      <a
        href="https://wa.me/972508339723"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
        alt="whatsapp Icon"
        style={{ ...whatsappStyles }}
        src={whatsappIcon} />
      </a>
    </div>
  )
}
