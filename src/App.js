import logo from './logo.svg';

import { useState } from 'react';
import Axios from 'axios';
import './App.css';
import {BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom';
import Home from './components/home';
// import Info1 from './components/info1';
// import Info2 from './components/info2';
// import Info3 from './components/info3';
// import Info4 from './components/info4';
// import Info5 from './components/info5';
import Status from './components/status';




function App() {
  // const infoPage = () =>{
      
  // }

  console.log("It is home page")
  return (
    <Router>     
     <Routes>
    
    <Route path="/" element = {<Home/>}/>
    <Route path="/status" element = {<Status/>}/>
    </Routes>
    </Router>

    
      

/* <div className = "App">

    
      </div> */
    // <div className="App">
    //   <input type = "text"
    //   onChange={(event)=>{
    //     setUserName(event.target.value);
    //   }}
    //   />
    //   <input type = "text"
    //   onChange={(event)=>{
    //     setReason(event.target.value);
    //   }}
    //   />
    //   <button onClick={add}>

    //   </button>
    // </div>
    
    );
  
}

export default App;
