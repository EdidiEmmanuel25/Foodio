import Header from "../component/header/header";
import './signup1.css'
import React from "react";

function Signupone() {
    return (
        <div className="signup">
            <Header/>
            <div className='singup1'>
            <h1>Register</h1>
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">E-mail</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="text" />
            <a className="ae" href="login">Log in</a>
            <a className="button" href="/signtwo">Register</a>
      </div>

        </div>
      
      
     
    );
  }
  
  export default Signupone;