
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA39o1sFEJ-mZ3CawBHXmsDDIBy-KeyuIc",
    authDomain: "farmbot-1cb00.firebaseapp.com",
    databaseURL: "https://farmbot-1cb00-default-rtdb.firebaseio.com",
    projectId: "farmbot-1cb00",
    storageBucket: "farmbot-1cb00.appspot.com",
    messagingSenderId: "191697403139",
    appId: "1:191697403139:web:080743b2ce67fb1004bd36",
    measurementId: "G-RJDHNS2TBL"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

export {db} 