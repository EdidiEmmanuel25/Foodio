import './special.css';
import Header from '../component/header/header.jsx';
import{FaSearch,FaCartPlus,FaRegHeart} from 'react-icons/fa'
import jellof from'../component/photo/jellof.png'
import cake from'../component/photo/chococake.png'
import pizza1 from'../component/photo/pizza1.png'
import burder from'../component/photo/burder.png'
import chips from'../component/photo/chipsv.png'
import pinkdrink from'../component/photo/pinkdrink.png'
import wine1 from'../component/photo/wine1.png'
import wine2 from'../component/photo/wine2.png'
import wine3 from'../component/photo/wine3.png'
import greendrink from'../component/photo/greendrink.png'
import substract from'../component/photo/Subtract.png'
import Footer from '../component/footer/footer';
import { useState } from 'react';
import Verlink from '../component/verlink/verlink.jsx';
function Special() {
  const  [verfoods,setVerfood] = useState([
        {img:cake,
          text1:"desert Cake special - save N9000!",
          text2:"N12,000 Save 38% Today",
          text3:"N21,000"
      },
      {img:pizza1,
      text1:"desert dog special - save N9000!",
      text2:"N99,000 Save 90% Today",
      text3:"N21,000"
    }

  ])
  return (
    <div className='special'>
        <Header/>
        <div className="specialin">
            <div className="input11">
                <input type="text" placeholder='Search' />
                <FaSearch size={20} />
            </div>
            <div className="cart">
            <div className='count'>3</div>
                <FaCartPlus size={30}/> 
             
            </div>
        </div>
        <div className="food">
        {verfoods.map((verfood) => {
          return(
             <Verlink img={verfood.img} text1 = {verfood.text1} text2 = {verfood.text2} text3 = {verfood.text3}/>
            );
            })}              
         
        </div>
        <div className="viewed">
          <div className="viewtop">
            <h1>Recently Viewed</h1>
            <h4>See All</h4>
          </div>
          <div className="viwecon">
          <div className="viewimag">
            <img src={burder} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart  className='heart'/>
              </div>
            </div>
            
          </div>
          <div className="viewimag">
            <img src={chips} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart className='heart'/>
              </div>
            </div>
            
          </div>
          <div className="viewimag">
            <img src={pinkdrink} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart className='heart'/>
              </div>
            </div>
            
          </div>
          </div>
          
        </div>

        <div className="viewed">
          <div className="viewtop">
            <h1>Recently Viewed</h1>
            <h4>See All</h4>
          </div>
          <div className="viwecon">
          <div className="viewimag">
            <img src={wine1} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart className='heart'/>
              </div>
            </div>
            
          </div>
          <div className="viewimag">
            <img src={greendrink} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart className='heart'/>
              </div>
            </div>
            
          </div>
          <div className="viewimag">
            <img src={wine2} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart className='heart'/>
              </div>
            </div>
            
          </div>
          <div className="viewimag">
            <img src={wine3} alt="" />
            <div className="tectcon">
              <div className="textcontext">
              <p>Big Size Burger</p>
             <p> N23,000</p>
              </div>
              <div className="textconh">
                <FaRegHeart  className='heart'/>
              </div>
            </div>
            
          </div>
          </div>
          
        </div>
        <div className="lastimg">
          <img src={substract} alt="" />
        </div>
          <Footer/>
    
    </div>
    
   
  );
}

export default Special;