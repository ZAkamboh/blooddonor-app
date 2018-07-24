import React,{Component} from "react";
import * as firebaseconfig from "firebase";


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXyl1SVVGvqYwyNDWsU2z7gXaDvxKVN38",
    authDomain: "blood-app-51808.firebaseapp.com",
    databaseURL: "https://blood-app-51808.firebaseio.com",
    projectId: "blood-app-51808",
    storageBucket: "",
    messagingSenderId: "452655855884"
  };

  var firebase=firebaseconfig.initializeApp(config);
export default firebase;
