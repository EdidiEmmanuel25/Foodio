import Header from "../component/header/header";
import foodlogo from '../component/photo/foodlogo.png'
import './signup2.css'
import React from "react";

function Signuptwo() {
    return (
        <div className="signup">
            <Header/>
            <div className="log" >
            <img src={foodlogo} alt="" />
            </div>
            
            <div className='singup2'> 
              <div className="by">
              <label htmlFor="">fistname</label>
              <input type="text" />
              </div>
              <div className="by">
              <label htmlFor="">last Name</label>
              <input type="text"/>
              </div>
              <div className="by">
              <label htmlFor="">Location</label>
              <input type="text" />
              </div>
              <div className="by">
              <label htmlFor="">Zip Code</label>
              <input type="text" />
              </div> 
              <div className="by">
              <label htmlFor="">Favorite spot</label>
              <select name="" id="">
                <option value="">Favorite spot</option>
                <option value="">Chicken Republic</option>
                <option value="">Mega Chicken</option>
                <option value="">Mcdonalds</option>
                <option value="">Ibile</option>
                <option value="">KFC</option>
                <option value="">The Place</option>
              </select>
              </div>                    
           
        </div>
        <div className="by">
        <a className="butto" href="/">Sign up</a>
        </div>
      
        </div>
      
      
     
    );
  }
  
  export default Signuptwo;