import {FaQuestionCircle,FaArrowDown,FaWindowClose} from "react-icons/fa";
import React from "react";
import  {  useState } from 'react'


function Tracklist(props) {
const [toggleMenu , setToggelMenu] = useState(false)
    return (
      <div className='dropdown'>
     
            <div className="drop">
                <div className="drop1">
                <FaQuestionCircle size={23} />
                <p>{props.text}</p>
                </div>
                <div className="drop2">
                <FaArrowDown size={23} color=" rgba(91, 26, 4, 1)" onClick={() => setToggelMenu(true)}/>
                
                </div> 
                 
               
                </div>
                <div>
                   {toggleMenu  && (
                    <div>
                        <FaWindowClose size={34}  className="close2" color='rgba(91, 26, 4, 1) '  onClick={() => setToggelMenu(false)}/>
                        <div className="dropdowncontent">
                          <p>{props.text1}</p>
                        </div>
                        </div>    
                        )}
                    </div>
                          

                   
              </div>
      
     
    );
  }
  
  export default Tracklist;