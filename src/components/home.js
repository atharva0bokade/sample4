import React from 'react';
import { useState } from 'react';
import {Route, Link, Router} from 'react-router-dom';
import './homeStyle.css';

function Home(params) {
    const [userName,setUserName]=useState("");
const [reason,setReason]=useState("");
console.log("It is home page");
// const add = () =>{
//   console.log(userName)
//   Axios.post("http://localhost:3001/add", {
//     userName : userName,
//     reason : reason
//   });
// }
    return(
        <div className = "Menu">
      
      
 
        <Link to = "/status"><button type="button" className="btn btn-danger" id="button6">{">"}</button></Link>
       
      
      </div>
    );
}

export default Home;