import firebase from "firebase";


  const firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyDv5kk3vh2ckLo2qvIYO6YDZiLghRF-RnQ",
        authDomain: "fir-4c3d1.firebaseapp.com",
        databaseURL: "https://fir-4c3d1.firebaseio.com",
        projectId: "fir-4c3d1",
        storageBucket: "fir-4c3d1.appspot.com",
        messagingSenderId: "508805778009",
        appId: "1:508805778009:web:2d263685408dd20b707f48",
        measurementId: "G-YWTMDVH9DW",
     
  })

  const db = firebaseapp.firestore();
  const auth = firebase.auth()

  export { db , auth }