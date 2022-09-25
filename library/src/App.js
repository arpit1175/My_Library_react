
import './App.css';
import Login from './components/Login';
import AllBookhome from './components/AllBookhome';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import "./components/login.css";
import Bookdata  from './components/Bookdata';



function App() {
  return (<>

  <div className='all'>

  <Router>
    <Routes>
      <Route path='/' element = {<Login/>}></Route>
      <Route path='/AllBookhome' element = {<AllBookhome/>}></Route>
      <Route path='/Bookdata' element = {<Bookdata/>}></Route>
      <Route path='/' element = {<Login/>}></Route>
      
    </Routes>
  </Router>

  </div>


  </>
   
  );
}

export default App;
