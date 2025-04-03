import{FaTrash} from 'react-icons/fa'
import './verlink.css'
import React from "react";


function Verlink(props) {
  return (
    <div className='verlink'>
         <div className="food">
          <div className="foodflex">
          <div className="food1">
            <img src={props.img} alt="" />
          </div>
          <div className="food2">
            <h2>{props.text1}</h2>
            <h3>{props.text2}</h3>
            <h3>{props.text3}</h3>
            <div className="size">
              <a>S</a>
              <a>M</a>
              <a>L</a>
              <a>XL</a> 
            </div>
            <a className='food2a'>Cart Summary</a>
            <p>Sub-Total= N24,000 +38%</p>
            <div className="delete">
              <FaTrash size={20} className='trash'/>
               <p>Remove</p>
            </div>
            <button className='boo' type='button'>Proceed to checkout</button>
          </div>
          </div>
          </div>
    </div>
    
   
  );
}

export default Verlink;
 
