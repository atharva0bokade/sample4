// 
import React  from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './statusStyle.css';
import {Route, Link, Router} from 'react-router-dom';


function Status(props) {
  
  const [request1_list,setRequest1_list]=useState([]);
  

 
 
  
  
  useEffect(()=>{
   
    Axios.get('https://appointment0backend.herokuapp.com/all').then((res)=>{
      setRequest1_list(res.data);
      console.log(res.data);
      
    }
    )
  },[]);
  
  
    return (
    
      <div className="requests">
        <h4 id="time">Accepted Requests</h4>
      <div className="list-group">
        {request1_list.map((val,key)=>{
          return(
            <div className="list-group-item list-group-item-action list-group-item-danger" >Name : {val.userName}   Email : {val.email} Reason : {val.reason} Time : {val.time} Status : {val.approve}
            {/* <button type="submit" id ="btn_reqa" onClick={()=>reject(val._id)} className="btn btn-danger btn-sm">Reject</button> */}
            </div>
          );
        })}
        
      {/* <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div> */}
      
    </div>
    </div>
    );
  }
  export default Status;
  