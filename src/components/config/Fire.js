import firebase from "firebase"

  var config = {
    apiKey: "AIzaSyBpn8jAj0Tkgod_2GY1oEMcgID33z-Wfpc",
    authDomain: "looking-for-job.firebaseapp.com",
    databaseURL: "https://looking-for-job.firebaseio.com",
    projectId: "looking-for-job",
    storageBucket: "looking-for-job.appspot.com",
    messagingSenderId: "96659967380"
  };

const fire = firebase.initializeApp(config)

export default fire