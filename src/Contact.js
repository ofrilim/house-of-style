import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <form>
        <label>Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Content</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}
