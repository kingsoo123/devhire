import './App.css';
import DevList from './DevList';
import Favorites from './Favorite';
import Mainpage from './Mainpage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="container">
   <Router>
   <DevList/>
<Routes>
  <Route path="" element={<Mainpage/>}/>
  <Route path="favourite" element={<Favorites/>}/>
</Routes>
   </Router>
    </div>
  );
}

export default App;
