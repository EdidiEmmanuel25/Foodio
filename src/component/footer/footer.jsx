import './footer.css'
import foodlogo2 from'../photo/foodlogo2.png'
import stores from'../photo/stores.png'
import snap from'../photo/snap.png'
import insta from'../photo/insta.png'
import tictok from'../photo/tictok.png'
import facebook from'../photo/facebook.png'

function Footer() {
    return (
        <div>
            <div className="footer">
            <div className="foot-f">
                <img src={foodlogo2} alt="" />
                <img src={stores} alt="" />
                <p>Company RC84000 Register with Nigeria Corperate Affair commisions</p>
            </div>
            <div className="foot-s">
                <h5>GEt Exclusive Deals in your Inbox</h5>
                <div className='sbutton'>
                <input type="text" placeholder='youremail@gmail.com'/>
                <button type='button'>Subscribe</button>
                </div>
                <p>We wont spam you ,Read our Email Policy</p>
                <div className="foot-si">
                <img src={facebook} alt=""  />
                <img src={insta} alt="" />
                <img src={tictok} alt="" />
                <img src={snap} alt="" />
                </div>
                
            </div>
            <div className="foot-t">
                <h3>Legal Pages</h3>
                <a href="">Tems and Condition</a>
                <a href="">policy</a>
                <a href="">cookies</a>
            </div>
            <div className="foot-ft">
                <h3>Important link</h3>
                <a href="">Get Help</a>
                <a href="">Add your Restaurant</a>
                <a href="">Sign up to deliver</a>
                <a href="">Create a bussiness account</a>
            </div>
         </div>
            
        </div>
     
    );
  }
  
  export default Footer;