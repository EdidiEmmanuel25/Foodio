import Header from "../component/header/header";
import image1 from "../component/photo/image1.png"
import spag from '../component/photo/spag.png'
import notification from '../component/photo/notification.png'
import rectangle1 from '../component/photo/Rectangle.png'
import rectangle11 from '../component/photo/Rectangle11.png'
import rectangle2 from '../component/photo/Rectangle80.png'
import rectangle21 from '../component/photo/Rectangle 21.png'
import rectangle3 from '../component/photo/Rectangle3.png'
import rectanglecoffe from '../component/photo/Rectanglecoffe.png'
import Rice from '../component/photo/rice.png'
import chickenchip from '../component/photo/chickenchips.png'
import chickenchip2 from '../component/photo/chickenchips2.png'
import pizza from '../component/photo/pizza.png'
import pizza2 from '../component/photo/pizza2.png'
import breakfast from '../component/photo/breakfast.png'
import soup from '../component/photo/soup.png'
import ibile from '../component/photo/ibile.png'
import mega from '../component/photo/mega.png'
import kfc from '../component/photo/kfc.png'
import chickenrep from '../component/photo/chickenrep.png'
import mcdonald from '../component/photo/mcdonald.png'
import place from '../component/photo/place.png'
import women from '../component/photo/women.png'
import foodlogo from '../component/photo/foodlogo.png'
import stores from'../component/photo/stores.png'
import man1 from'../component/photo/man1.png'
import man2 from'../component/photo/man2.png'
import citie from'../component/photo/citie.png'
import online from'../component/photo/Onlineorder.png'
import order from'../component/photo/order.png'
import track from'../component/photo/Track.png'
import Footer from '../component/footer/footer';
import { FaMoneyBillAlt,FaThermometer, FaWindowClose} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import './rest.css'
import Adlink from "../component/adlink/adlink";
const images = [rectangle1,rectangle11];
const images1 = [rectangle2,rectangle21];
const images2 = [rectangle3,rectangle1];
const chicken = [chickenchip,chickenchip2]
const pizza1 = [pizza,pizza2]
const man = [man1,man2]



function Rest() {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(currentIndex === images.length - 1) {
                    setCurrentIndex(0);
                } 
                else {
                    setCurrentIndex(currentIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const [newIndex, setNewIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(newIndex === images1.length - 1) {
                    setNewIndex(0);
                } 
                else {
                    setNewIndex(newIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const [recentIndex, setRecentIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(recentIndex === images2.length - 1) {
                    setRecentIndex(0);
                } 
                else {
                    setRecentIndex(recentIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const [chickenIndex, setChickenIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(chickenIndex === chicken.length - 1) {
                    setChickenIndex(0);
                } 
                else {
                    setChickenIndex(chickenIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const [pizzaIndex, setPizzaIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(pizzaIndex === pizza1.length - 1) {
                    setChickenIndex(0);
                } 
                else {
                    setPizzaIndex(pizzaIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const [manIndex, setManIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(manIndex === man.length - 1) {
                    setManIndex(0);
                } 
                else {
                    setManIndex(manIndex + 1);
                }
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])
        const Menu3 = () =>(
            <>
                <p className="t1">Frequent Question</p>
                <p>Who are you</p>
                <p>Partner Program</p>
                <p>Help & support</p>
    
            </>
        )
        const [toggleMenu , setToggelMenu] = useState(false)
    return (
        <div className="resthomemain">
            <Header/>
            <div className="mai">
                <div className="maif">
                    <p className="p1">Order Resturant food and groceries</p>
                    <h1>Feast your sense,</h1>
                    <h1 className="yellowp">Fast and Fresh</h1>
                    <p>Enter a location to see what we deliver</p>
                    <div className="mafip">
                    <input type="text" placeholder="eg.fagba,lagos" />
                    <button type="button">Search</button>
                    </div>
                    
                </div>
                <div className="mais">
                    <div className="image">
                        <img src={image1} alt=""  className="woman"/>
                        <div className="com">
                        <img src={spag} alt="" className="spag" />
                        <div className="notm">
                        <img src={notification} alt="" className="not" />
                        <img src={notification} alt="" className="not" />
                        <img src={notification} alt="" className="not" />
                        </div>
                        </div>
                        
                    </div>
                </div>     
            </div>
                <Adlink/>
                <div className="imagemain">
                <div className="mainimg">
                    <div className="imagcon">
                    <img  src={images[currentIndex]} alt="" />
                    <div className="percentage">
                        <p>-40%</p>
                    </div>
                    <div className="text1">
                        <p>Restaurant</p>
                        <h2>Chicken Republic</h2>
                    </div>
                    </div>
                </div>
                <div className="mainimg">
                    <div className="imagcon">
                    <img  src={images1[currentIndex]} alt="" />
                    <div className="percentage">
                        <p>-20%</p>
                    </div>
                    <div className="text1">
                        <p>Restaurant</p>
                        <h2>Rubels & Angels</h2>
                    </div>
                    </div>
                </div>
                <div className="mainimg">
                    <div className="imagcon">
                    <img  src={images2[currentIndex]} alt="" />
                    <div className="percentage">
                        <p>-17%</p>
                    </div>
                    <div className="text1">
                        <p>Restaurant</p>
                        <h2>Mama Cass</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="categories">
                    <div className="cattext">
                        <h1>Popular Categories </h1>
                    </div>
                    <div className="catimage">
                        <div className="catimagecon">
                            <img src={rectanglecoffe} alt="" />
                            <h2>Beverages</h2>
                            <h4>21 Resturants</h4>
                        </div>
                        <div className="catimagecon">
                            <img src={Rice} alt="" />                      
                            <h2>Rice</h2>
                            <h4>2 Resturants</h4>
                </div>
                        <div className="catimagecon">
                            <img src={chicken[chickenIndex]} alt="" />
                            <h2>Chicken&Chips</h2>
                            <h4>4 Resturants</h4>
                        </div>
                        <div className="catimagecon">
                        <img src={pizza1[pizzaIndex]} alt="" />
                            <h2>Pizza</h2>
                            <h4>32 Resturants</h4>
                        </div>
                        <div className="catimageconx">
                            <img src={breakfast} alt="" />
                            <h2>Breackfast</h2>
                            <h4>4 Resturants</h4>
                        </div> 
                        <div className="catimageconx">
                            <img src={soup} alt="" />
                            <h2>Soup</h2>
                            <h4>31 Resturants</h4>
                        </div> 
                        
                    </div>
                </div>
                <div className="categories">
                    <div className="cattext">
                        <h1>Popular Resturant </h1>
                    </div>
                    <div className="catimage">
                        <div className="catimagecon1">
                            <img src={mcdonald} alt="" />
                            <h2>Mcdonalds London</h2>
                        </div>
                        <div className="catimagecon1">
                            <img src={kfc} alt="" />                      
                            <h2>Kfc west london</h2>
                </div>
                        <div className="catimagecon1">
                            <img src={chickenrep} alt="" />
                            <h2>Chicken Republic</h2>
                        </div>
                        <div className="catimagecon1">
                        <img src={mega} alt="" />
                            <h2>Mega Chicken</h2>
                        </div>
                        <div className="catimageconx1">
                            <img src={place} alt="" />
                            <h2>the Place</h2>
                        </div> 
                        <div className="catimageconx1">
                            <img src={ibile} alt="" />
                            <h2>Ibile food</h2>
                        </div> 
                        
                    </div>
                </div>
                <div className="foodbanner">
                    <div className="bannerimage">
                        <img  className="img1" src={women} alt="" />
                        <div className="bannercontent">
                        <div className="bannerim">
                            <img src={foodlogo} alt="" />
                            <h1>is more</h1>
                        </div>
                        <h1 className="h1l"><span>Personalised</span>& Instant</h1>
                        <p>Download the foodie app for fat Ordering</p>
                        <img src={stores} alt="" />
                    </div>
                    </div>
                    
                </div>
                <div className="flow">
                    <div className="flow1">
                        <img src={man[manIndex]} alt="" />
                        <div className="flowup">
                            <p>Earn more with lower Fees</p>
                    </div>
                        <div className="flowdown">
                            <p>sign up a bussines</p>
                            <h1>Partner with us</h1>
                            <button>Sign up</button>
                        </div>
                    </div>
                    <div className="flow1">
                        <img src={citie} alt="" />
                        <div className="flowup">
                            <p>Earn more with lower Fees</p>
                        </div>
                        <div className="flowdown">
                            <p>sign up a bussines</p>
                            <h1>Partner with us</h1>
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="track">
                    <div className="trackup">
                        <div className="trackup1">
                            <h1>Know more about us!</h1>
                        </div>
                        <div className="trackup2">
                           <Menu3 />
                        </div>
                         <div className="ad21">
                            <FaThermometer size={34} color=' rgba(91, 26, 4, 1)'  onClick={() => setToggelMenu(true)}/>
                            {toggleMenu  && (
                            <div className='add2'>
                                <FaWindowClose size={34} className="overlay_close" color="white"   onClick={() => setToggelMenu(false)}/>
                                <div className='ad21links'>
                                    <Menu3  /> 
                                    </div>  
                                </div>    
                                )}
                            </div>
                    </div>
                </div>
                <div className="trackdown">
                    <div className="tracdown1">
                         <p className="t2">How Does Foodio Work?</p>
                        <p>What payment methods are accepted</p>
                        <p>Can i track my order in real-time?</p>
                        <p>Are there any special discounts or</p>
                        <p>promotions available</p>
                        <p>Is Foodio available in my area?</p>
                    </div>
                    <div className="track2">
                        <div className="track22">
                                <div className="trackimg">
                                <h4>Place Holder</h4>
                                <img src={online} alt="" />
                                <p>place your order through the website ormobile</p>
                            </div>
                            <div className="trackimg">
                                <h4>Place Holder</h4>
                                <img src={order} alt="" />
                                <p>place your order through the website ormobile</p>
                            </div>
                            <div className="trackimg">
                                <h4>Place Holder</h4>
                                <img src={track} alt="" />
                                <p>place your order through the website ormobile</p>
                            </div>
                        </div>
                        <div className="track22t">
                        <p>
                            Order.UK simplifies the food ordering process. Browse through our 
                            diverse menu, select your favorite dishes,
                             and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
                             </p>
                        </div>
                    </div>
                </div>
                <div className="records">
                    <div className="rec1">
                    <div className="rec11">
                        <h2>546+</h2>
                        <p>Registered Riders</p>
                        </div>
                    </div>
                    <div className="rec12"></div>
                    <div className="rec1">
                    <div className="rec11">
                        <h2>789,900+</h2>
                        <p>Order Delivered</p>
                        </div>
                    </div>
                    <div className="rec12"></div>
                    <div className="rec1">
                    <div className="rec11">
                        <h2>690+</h2>
                        <p>Restuarant partnered</p>
                        </div>
                    </div>
                    <div className="rec12"></div>
                    <div className="rec1">
                        <div className="rec11">
                        <h2>17,457+</h2>
                        <p>Food Item</p>
                        </div>
                    </div>
                    
                </div>
                <Footer/>
                
        </div>
     
    );
  }
  
  export default Rest;