import React from "react";
import { admin } from "firebase-admin";
import { loginBtn } from "./loginbtn"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHnNPKu4dVrDDLY9hqLXHcuq0QIjGXOoQ",
  authDomain: "lfj-looking-for-job.firebaseapp.com",
  databaseURL: "https://lfj-looking-for-job.firebaseio.com",
  projectId: "lfj-looking-for-job",
  storageBucket: "lfj-looking-for-job.appspot.com",
  messagingSenderId: "827808830087"
};
admin.initializeApp(config);

const login = (props) =>{
  return(
    
  )
}