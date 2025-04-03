import ballon from '../photo/ballon.png'
import './adlink.css'
import { FaMoneyBillAlt,FaThermometer,FaWindowClose} from "react-icons/fa";
import  {  useState } from 'react'
function Adlink() {
    const [toggleMenu , setToggelMenu] = useState(false)
    const Menu2 = () =>(
         <>
             <ul>
                <li>Beverages</li>
                <li className='soup'>Soup</li>
                <li className='pizza'>pizza % fast food</li>
                <li>Others</li>
            </ul>
          
         </>
     ) 
    return (
        <div className="ad">
        <div className="ad1">
            <h2>Up to-40%</h2>
            <img src={ballon} alt="" />
            <h2>Foodio exclusive deals</h2>
        </div>
        <div className="ad2">
           <Menu2 />
        </div>
         
        <div className="ad21">
            <FaThermometer size={34} color=' rgba(91, 26, 4, 1)'  onClick={() => setToggelMenu(true)}/>
            {toggleMenu  && (
            <div className='add2'>
                <FaWindowClose size={54}  color=' gold' className="overlay_close"    onClick={() => setToggelMenu(false)}/>
                <div className='ad21links'>
                    <Menu2  /> 
                    </div>  
                </div>    
                )}
            </div>
</div>
    );
  }
  
  export default Adlink;