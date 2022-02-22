import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './statusStyle.css';
import {Route, Link, Router} from 'react-router-dom';

function App() {
  const [request1_list,setRequest1_list]=useState([]);
  

 console.log("It is working");
 
  
  
  useEffect(()=>{
   
    Axios.get('https://appointment0backend.herokuapp.com/all').then((res)=>{
      setRequest1_list(res.data);
      console.log(res.data);
      
    }
    )
  },[]);
  
  const reject=(id)=>{
    Axios.put("http://localhost:3001/approve",{
      id:id,
      approve:"Rejected",
    });
    
    
  }
    
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

export default App;
