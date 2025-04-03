import React from "react";
import './home.css';
import {FaStickyNote} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import mcdonald from'../component/photo/mcdonald.png'
import group from'../component/photo/group.png'
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

function Home() {
  return (
    <div className='homemain'>
        <Header/>
        <div className="main2">
            <div className="main2f">
                <h2>How People Rate Our Resturant</h2>
                <p>Reviews&Rating</p>
            </div>
            <div className="main2-s">
                <h2>Rating&Reviews</h2>
                <div className='main2-s1'>
                    <a href="">47</a>
                <h3>most helpful Review</h3>
                </div>
             </div>
             <div className="main2-t">
                <img src={mcdonald} alt=""  />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel debitis error, alias deserunt nisi
                     quisquam doloribus. Necessitatibus nemo est quo perferendis explicabo possimus. Voluptates corrupti
                      placeat molestias tempora, saepe hic.</p>
             </div>
            <div className="main-tf">
                <div className="tf1">
                    <h2>Tell us what you Think!</h2>
                    <div className='tf11'>
                        <FaStickyNote color='gold' size={21}/>
                        <p>Write A Review</p>
                    </div>
                </div>
                <div className="tf2">
                    <h3>Tap To Rate</h3>
                    <div className="stae">
                    <FaRegStar className='star' size={38}/>
                    <FaRegStar className='star' size={38}/>
                    <FaRegStar className='star' size={38}/>
                    <FaRegStar className='star' size={38}/>
                    <FaRegStar className='star' size={38}/>
                    </div>
                    
                </div>
            </div>
         </div>
         <div className="advert">
            <img src={group} alt="" />
         </div>
            <Footer/>
    </div>
  );
}

export default Home;
