import React from 'react'
import "./Signup.css";

function Signup() {
  return (
    <div id='signup'
    onSubmit={(e) =>{
      alert("signup successfully..")
    }}>
        <form action="">
        <span id="signuptitle">Signup Page</span>
        <div className="list">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="list">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>
        <div className="list">
          <label htmlFor="cnfpass">Confirm Password</label>
          <input type="password" id="cnfpass" required />
        </div>
        <button id="signupbtn">Signup</button>
      </form>
    </div>
  )
}

export default Signup