import Header from '../component/header/header';
import {FaSearch,FaFilter,FaStar} from "react-icons/fa";
import ibile from '../component/photo/ibile.png'
import mega from '../component/photo/mega.png'
import kfc from '../component/photo/kfc.png'
import chickenrep from '../component/photo/chickenrep.png'
import mcdonald from '../component/photo/mcdonald.png'
import place from '../component/photo/place.png'
import character from '../component/photo/Character.png'
import people from '../component/photo/prople.png'
import woman from '../component/photo/girl.png'
import boy from '../component/photo/boty.png'
import drinks from '../component/photo/drinks.png'
import './resturants.css'
import Footer from '../../src/component/footer/footer'



function Restaurant() {
  return (
    <div className='restmain'>
        <Header/>
        <div className="restatop">
          <img src={character} alt="" />
          <div>
            <h1>Order From your favourite</h1>
            <p>Restaurants!!</p>
          </div>
        </div>
        <div className="restinput">
          <div className="restinput1">
          <input type="text" placeholder='search'/>
          <FaSearch/>
          <FaFilter/>
          </div>
          
        </div>
        <div className="restfeature">
          <h1>Featured Restaurant</h1>
          <div className="restfeaturegrid">
            <div className="restgridcon">
            <img src={place} alt="" />
            <div className="restgridtext">
              <h3>Chicken Republic -Nigerian Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp'color='gold'/>
              <FaStar className='starp'color='gold' />
              <FaStar className='starp'color='gold' />
              <FaStar className='starp'color='gold' />
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
            
            </div>
            <div className="restgridcon">
            <img src={ibile} alt="" />
            <div className="restgridtext">
              <h3>IBile -Nigerian Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp'color='gold' />
              <FaStar className='starp'color='gold' />
              <FaStar className='starp' />
              <FaStar className='starp' />
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
           
            </div>
            

            <div className="restgridcon">
            <img src={kfc} alt="" />
            <div className="restgridtext">
              <h3>Kfc -American Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp' color='gold' />
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp'color='gold' />
              <FaStar className='starp'color='gold' />
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
            </div>

            <div className="restgridcon">
            <img src={mcdonald} alt="" />
            <div className="restgridtext">
              <h3>Mc Donald-American Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp' color='gold' />
              <FaStar className='starp'color='gold' />
              <FaStar className='starp' color='gold' />
              <FaStar className='starp' />
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
            </div>

            <div className="restgridcon">
            <img src={mega} alt="" />
            <div className="restgridtext">
              <h3>Mega Chicken -Nigerian Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp'/>
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
            </div>

            <div className="restgridcon">
            <img src={chickenrep} alt="" />
            <div className="restgridtext">
              <h3>Chicken Republic -Nigerian Cuisine</h3>
              <div className="restgridstar">
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp' color='gold'/>
              <FaStar className='starp'color='gold'/>
              <p>4.2</p>
              </div>
              <p>30 mins Free Delivery</p>
              <a className='viewbutton'>View More</a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="resttoprated">
          <h1>Top Rated</h1>
          <div className="restfeatureflex">
          <img src={place} alt="" />
            <img src={ibile} alt="" />
            <img src={kfc} alt="" />
            <img src={mega} alt="" />
            <img src={chickenrep} alt="" />
          </div>
        </div>
        <div className="resttoprated">
          <h1>New Restaurants</h1>
          <div className="restfeatureflex">
            <img src={place} alt="" />
            <img src={ibile} alt="" />
            <img src={kfc} alt="" />
            <img src={mega} alt="" />
            <img src={chickenrep} alt="" />
          </div>
        </div>
        <div className="discover">
          <div className="discovertop">
          <h1>Discover Hot Delicious restaurant Options</h1>
          <p>Explore your favorite restaurants with exclusive deals</p>
          </div>
          <div className="discoverblock">
            <div className="block1">
              <h1>Chicken republic -- Fast Food</h1>
              <div className="star">
              <FaStar size={30}/>
              <FaStar size={30}/>
              <FaStar size={30}/>
              <FaStar size={30}/>
              <p>4.2</p>
              </div>
              <p className='pcolo'>30 mins free
              delivery</p>
              <p className='pcolo1'>20% off Today</p>
              <button type='button'>Explore Now</button>
              
            </div>
            <div className="block2">
              <img src={chickenrep} alt="" />
            </div>
          </div>
          <div className="discoverblock">
            <div className="block1">
              <h1>Mega Chicken -- Fast Food</h1>
              <div className="star">
              <FaStar size={30}/>
              <FaStar size={30}/>
              <FaStar size={30}/>
              <FaStar size={30}/>
              <p>4.1</p>
              </div>
              <p className='pcolo'>20 mins free
              delivery</p>
              <p className='pcolo1'>Buy 1 get 1 free</p>
              <button type='button'>Order Now</button>
              
            </div>
            <div className="block2">
              <img src={mega} alt="" />
            </div>
          </div>
        </div>
        <div className="jobopen">
          <div className="open1">
            <div className="open11">
              <div className="chef">
                <h5>A Chef</h5>
                <p>Designation: Applicant must understand basic continental dishes, must be experiencein cooking local dishes.Read more....</p>
              </div>
              <div className="chef2">
                <p className='location'>Location:  Mama Cass, Ikeja</p>
                <p>Designation: Applicant must understand basic continental dishes, must be experiencein cooking local dishes.Read more....</p>
              </div>
            </div>
            <p className='location'>Location:  Mama Cass, Ikeja</p>
            <p>Designation: Applicant must understand basic continental dishes, must be experiencein cooking local dishes.Read more....</p>
            <p className='location'>Location:  KFC ABuja, Ikeja</p>
            <p>Designation: Applicant must understand Read more....</p>
          </div>
          <div className="open2">
            <h1>Job Openings</h1>
            <img src={people} alt="" />
          </div>
        </div>
        <div className="discover">
          <div className="discovertop">
            <h1>what people are saying</h1>
            <p>what are our customer saying ?</p>
          </div>
          <div className="commentdv">
          <div className="comment">
            <p>“Foodio makes ordering so easy and fun! i love the varietyof restaurants and the amazingdeals”</p>
            <div className="commentimg">
              <div className="comimg">
              <img src={woman} alt="" />
              </div>
              <div className="comtext">
                <h3>sarah badmus</h3>
                <p>Video Editor</p>
              </div>

            </div>
          </div>
          <div className="comment">
            <p>“Foodio makes ordering so easy and fun! i love the varietyof restaurants and the amazingdeals”</p>
            <div className="commentimg">
              <div className="comimg">
              <img src={boy} alt="" />
              </div>
              <div className="comtext">
                <h3>Samuel yusuf</h3>
                <p>Video Editor</p>
              </div>

            </div>
          </div>
          </div>
        </div>
        <div className="drink">
          <img src={drinks} alt="" />
        </div>
        <Footer/>

    </div>
   
  );
}

export default Restaurant;