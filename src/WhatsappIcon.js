import React from 'react';
import whatsappIcon from './media/icons/whatsapp.png';

export default function WhatsappIcon() {
  return (
    <div>
      <a
        href="https://wa.me/972508339723"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
        style={{width: "60px", position: 'fixed', bottom: "2rem", right: "2rem", cursor: "pointer"}}
        src={whatsappIcon} />
      </a>
    </div>
  )
}
