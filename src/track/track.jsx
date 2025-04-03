import cake from'../component/photo/chococake.png'
import pizza1 from'../component/photo/pizza1.png'
import burder from'../component/photo/burder.png'
import chips from'../component/photo/chipsv.png'
import pinkdrink from'../component/photo/pinkdrink.png'
import wine1 from'../component/photo/wine1.png'
import wine2 from'../component/photo/wine2.png'
import wine3 from'../component/photo/wine3.png'
import Toptrack from '../component/toptrack/toptrack'
import { useState } from 'react'
import Footer from '../component/footer/footer';
import './track.css'
import Header from '../component/header/header'
import {FaQuestionCircle,FaArrowDown} from "react-icons/fa";
import Tracklist from '../component/tracklist/tracklist'
function Track() {
    const [images, Setimages] = useState([
        {img:cake},
        {img:pizza1}, 
        {img:burder},
        {img:chips},
        {img:pinkdrink},
        {img:wine1},

    ])
    const [newimages, Setnewimages] = useState([
        {img:wine2},
        {img:wine3},
        {img:cake},
        {img:burder},
        {img:pinkdrink},

    ])
    const [tracknames,setTrackname] = useState([
      {
        text:" Recommended topics",
         texto:"1. **Menu Innovation** – Experimenting with seasonal ingredients and unique flavors to keep the menu fresh and exciting.       2. Customer Experience Enhancing service quality, ambiance, and hospitality to create a memorable dining experience.3.Sustainability Practices Implementing eco-friendly initiatives like sourcing local ingredients and reducing food waste."    


      },
      {
        text:"Order issues",
        texto:"1. Customers often face delays or receive incorrect orders due to miscommunication or kitchen errors.  2. Missing items, wrong dishes, or food quality issues can lead to dissatisfaction and complaints.  3. Proper staff training and an efficient order management system can help minimize these problems."
      },
      {
        text:" Delivery",
        texto:"Fast and fresh, straight to your table,  Swift service ensures no long wait,  Delicious bites, delivered with care!"
      },
      {
        text:"Return Items",
        texto:"1. Customers can return items if they are incorrect, spoiled, or not as described.  2. Restaurants may offer refunds, replacements, or store credit depending on their policy.  3. Clear communication and a polite approach help resolve return requests smoothly."
        
      },
      {
        text:"Product & Stock",
        texto:"Managing product inventory and stock in a restaurant ensures smooth operations, minimizes waste, and controls costs. Regular tracking helps prevent shortages and overstocking. Efficient stock management enhances customer satisfaction and profitability."
      },
      {
        text:"Security",
        texto:"1. A restaurant should have CCTV cameras and security personnel to monitor activities and prevent theft.  2. Secure payment systems and data protection measures help prevent fraud and cyber threats.  3. Emergency protocols, such as fire safety and first aid training, ensure staff and customer safety."
      },
      {
        text:"Payment & Promo",
        texto:"1. Enjoy seamless payments with multiple options, including cash, cards, and digital wallets.  2. Take advantage of exclusive promotions and discounts on select meals and combos.  3. Join our loyalty program to earn rewards and special dining perks!"
      },
      {
        text:"Managing my Account",
        texto:"1. Keep track of expenses and payments to ensure accurate billing.  2. Regularly update account details for smooth reservations and orders.  3. Monitor rewards and discounts to maximize savings."
      },
      {
        text:"Policies & Others ",
        texto:"1. **Refund & Cancellation** – Orders once placed cannot be canceled; refunds are issued only for valid complaints.  2. **Health & Safety** – We adhere to strict hygiene protocols to ensure food safety and customer well-being.  3. **Reservation Policy** – Tables are held for 15 minutes past the reservation time before being released.  "
      },

    ])
    
    
    return (
    <div className='track'>
        <Header />
        <div className="toptrackf">
        <h3>Support:</h3>
        <p>Select an Order to get help with items, delivery, Complains or other issues.</p>
        </div>
        <div className="toptracks">
            <div className="tracks1">
                <h2>Delived</h2>
                <p>6 items:  #41, 300, Feb 20</p>
            </div>
            <div className="tracks2"> 
            {images.map((image) => {
            return(
            <Toptrack images = {image.img} />
            )
        })}
            </div>
        </div>
        <div className="toptracks">
            <div className="tracks1">
                <h2>New orders</h2>
                <p>5 items:  #41, 300, Feb 25</p>
            </div>
            <div className="tracks2"> 
            {newimages.map((image) => {
            return(
            <Toptrack images = {image.img} />
            )
        })}
            </div>

            </div>


             <div class="dropdown">
                {tracknames.map((trackname) => {
                  return(
                      <Tracklist 
                      text = {trackname.text} 
                       text1 = {trackname.texto}  
                      />
                  )
                })}
                </div>
                <div className="problem">
                  <h1>Still can’t solve the problem?</h1>
                  <button>Contact Us</button>
                </div>
               <Footer />
              


        
       
        
      </div>
      
     
    );
  }
  
  export default Track;
  