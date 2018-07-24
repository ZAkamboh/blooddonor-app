import React,{Component} from "react";
//import firebase from "../Config/firebase";
import Homee from "./home";
import About from "./about";
//import Map from "./map";
import {
  BrowserRouter as Router,
  Link ,
  Route
} from "react-router-dom";


class Home extends Component {
  render(){
    var styling={
      marginTop:"30px",
      fontSize:"20px"
    }
    var mapstyle={
      border:"3px solid black",
      height:"500px",
      width:"500px"

    }
    return (
      
        <div>
          <center style={styling}><h1>Welcome to blood donor application</h1>
           
          
          </center>

<div style={{textAlign:"center"}}>

                <a className="btn btn-success" href="/login" style={{marginTop:"80px"}}>Find Donors</a>
                <br/>
                <a className="btn btn-primary" href="/donate" style={{marginTop:"80px"}}>donate blood</a>
              </div>

        </div>
      

    )
  }
}
export default Home;
