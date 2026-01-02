import React from 'react'
import "./Contact.css"
import {TbFileLike} from "react-icons/tb";

function Contact() {
  return (
    <div id='contact'>
        <form action="https://formspree.io/f/mldadwqb" method='post'>
        <span id="contacttitle">Contact Page</span>
        <div className="list">
          <label htmlFor="user">Username</label>
          <input name='username' type="text" id="user" required />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input name='mail' type="text" id="email" required />
        </div>
        <div className="list">
          <label htmlFor="msg">Message</label>
          <input name='message' type="text" id="msg" required />
        </div>
        <button id="contactbtn">Submit<TbFileLike/></button>
      </form>
    </div>
  )
}

export default Contact