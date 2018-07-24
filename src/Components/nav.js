


import React,{Component} from 'react';

//import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from "react-router-dom";
//  import {
  // AppBar,
   //Toolbar,
   //Typography,
   //Button
 // } from "material-ui";

var style={
 Link:{

marginLeft: 100


}
}
class Home extends Component{




render(){
   
  var styling = {
    color: "white",
    fontSize: "20px",
    fontFamily: "verdana"
  }
  var linkstyle = {
    fontSize: "20px",
    fontFamily: "algerian",
    color: "white"
  }
  var dropdown = {
    fontSize: "15px",
    fontFamily: "algerian"
  }
return (

  <nav className="navbar navbar-inverse bg-primary">
            <strong style={styling}>Blood Donor App</strong>
            <div className="navbar nabar-right" >
              <Link className="navbar navbar-content" style={styling} to="/">Home</Link>
              <div className="dropdown" >
                <button className="btn btn-primary dropdown-toggle navbar navbar-content" style={linkstyle} type="button" data-toggle="dropdown">Services
					  <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><Link className="navbar navbar-content" style={dropdown} to="/login">Find A Donor</Link></li>
                  <li><Link className="navbar navbar-content" style={dropdown} to="/donate-your-blood">Donate Your Blood</Link></li>
                </ul>
              </div>
              <Link className="navbar navbar-content" style={styling} to="/signup">Sign Up</Link>
              <Link className="navbar navbar-content" style={styling} to="/login">Log In</Link>
              <Link className="navbar navbar-content" style={styling} to="/about">About Us</Link>
              <Link className="navbar navbar-content" style={styling} to="/map">Contact Us</Link>
            </div>
          </nav>
)

}
}


export default Home




















