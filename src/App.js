import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./home/home.jsx"
import Rest from './resthome/rest.jsx';
import Restaurant from './restaurants/restaurants.jsx';
import Special from './special/special.jsx';
import Track from './track/track.jsx';
import Signupone from './signup/signup1.jsx';
import Signuptwo from './signup/signup2.jsx';
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

function App() {
  return (
    <div className='mainapp'>
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
      <Route path='/rest' element={<Rest/>} />
      <Route path='/browsemenu' element={<Restaurant/>} />
      <Route path='/specialmenu' element={<Special/>} />
      <Route path='/track' element={<Track/>} />
      <Route path='/signone' element={<Signupone/>} />
      <Route path='/signtwo' element={<Signuptwo/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
   
  );
}

export default App;
