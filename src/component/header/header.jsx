import './header.css'
import {  NavLink } from 'react-router-dom'
import { FaLocationArrow,FaPeopleCarry, FaCartPlus,FaArrowAltCircleDown,FaStar, FaHamburger,FaPizzaSlice } from "react-icons/fa";
import foodlogo from '../photo/foodlogo.png'
import  {  useState } from 'react'


function Header() {
        const [color, setColor] = useState(false);
    
        const handleClick = () => {
            setColor(!color)
        }
        const [toggleMenu , setToggelMenu] = useState(false)
       const Menu = () =>(
            <>
            <NavLink className={({isActive})=>isActive?"active-design" : "default-design"} to={"/"} >
                                <li>Home</li>
                            </NavLink>
                            <NavLink className={({isActive})=>isActive?"active-design" : "default-design"} to={"/browsemenu"}>
                            <li>Browse menu</li>
                            </NavLink>
                            <NavLink className={({isActive})=>isActive?"active-design" : "default-design"}  to={"/specialmenu"}>
                            <li>Special offer</li>
                            </NavLink>
                            <NavLink className={({isActive})=>isActive?"active-design" : "default-design"}  to={"/rest"}>
                            <li>Restaurant</li>
                            </NavLink>
                        
                        <NavLink className={({isActive})=>isActive?"active-design" : "default-design"}  to={"/track"} >
                        <li>Track order</li>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?"active-design" : "default-design"} to={"/signone"}>
                        <div className='acc'>
                            <FaPeopleCarry className='acc-img' />
                            <h3>Account</h3>
                        </div></NavLink>
             
            </>
        ) 
        
    return (
        <div>
            <div className="top-body">
                    <div className="top">
                        <div className="top-f">
                        <FaStar color='gold'/>  
                        <p>Get 5% Off Your First Order,</p>
                        <a href="">Promo:order5</a>
                        </div>
                        <div className="top-s">         
                            <FaLocationArrow />
                            <p> Providence School,Fagba Lagos</p>
                            <a href="">Change Location</a>
                        </div>
                        <div className="top-t">
                            <div className="four">
                                <FaCartPlus size="24px" color='white' />
                            </div>
                            <div className="four">
                                <p>3 items</p>
                            </div>
                            <div className="four">
                                <p>NGN 700,000</p>
                            </div>
                            <div className="four">
                                <FaArrowAltCircleDown size="24px" color='white' />
                            </div>
                        </div>
                    </div>
                        <div className='clo' />
                        <div className="main">
                        <img src={foodlogo} alt="" />
                        <div className="navbar">
                            <Menu/>
                        </div>
                        
                        <div className="navbar_pho">
                            <FaHamburger size={34} color='rgba(91, 26, 4, 1)' onClick={() => setToggelMenu(true)}/>
                            {toggleMenu  && (
                            <div className="navbar_pho-overlay ">
                                <FaPizzaSlice size={34}  className="overlay_close" color='gold'  onClick={() => setToggelMenu(false)}/>
                                <div className="navbar_pho-links">
                                    <Menu  /> 
                                    </div>  
                                </div>    
                                )}
                            </div>
                        
                         </div>
                    </div>
                   
        </div>
     
    );
  }
  
  export default Header;