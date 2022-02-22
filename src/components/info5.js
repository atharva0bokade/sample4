import React from 'react'
import './info1Style.css'
import { useState } from 'react';
import Axios from 'axios';
import {Route, Link, Router} from 'react-router-dom';
function Info5() {
  const [userName,setUserName]=useState("");
const [reason,setReason]=useState("");
const [email,setEmail]=useState("");
const add = () =>{
  console.log(userName)
  Axios.post("https://appointment0backend.herokuapp.com/add", {
    userName : userName,
    reason : reason,
    email : email,
    time : "4pm to 5pm",
  });
}
    return(
      <div className="infoStyle">
      <form> <h6 id ="time">Booking for : 4pm to 5pm</h6>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id="name_text">Name</label>
        <input type="text" className="form-control" onChange={(event)=>{setUserName(event.target.value)}} id="name"  />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id="email_text">Email address</label>
        <input type="email" className="form-control"onChange={(event)=>{setEmail(event.target.value)}} id="email"/>
        
      </div>
      
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" id="reason_text">Reason for appointment</label>
  <textarea class="form-control" id="reason" rows="3" onChange={(event)=>{setReason(event.target.value)}} ></textarea>
</div>
<div id="info_text" className="form-text">You will receive an email regarding confirmation.</div>
<Link to ="/"> <button type="button" className="btn btn-primary" id="back" >Back</button></Link>
<Link to ="/"> <button type="submit" className="btn btn-primary" id="sub_btn" onClick={add}>Submit</button></Link>    </form>
    </div>
    );
}

export default Info5;