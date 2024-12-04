import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import  Mynav from './components/Mynav'
import MyFooter from './components/MyFooter'
import ActionBar from './components/ActionBar'
import StarWars from './components/StarWars'
import Marvel from './components/Marvel'
import Disney from './components/Disney';
import {} from 'react-bootstrap-icons';
import TvShow from './components/TvShow';

function App() {
  return(
    <Router>
   <>
<Mynav />
<ActionBar/>
<Routes>
  <Route path="/" element={<div className='container mt-4'><StarWars/><Marvel/><Disney/>
</div>} 
/>
<Route  path="/tvshow" element={<TvShow/>} />
</Routes>

<MyFooter/>

   </>
   </Router>
 ) 
}

export default App


