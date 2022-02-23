import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMIIGcUKR80w07TRU9JKlHIM-WBSowAiw",
    authDomain: "e-commerce-3a0f3.firebaseapp.com",
    projectId: "e-commerce-3a0f3",
    storageBucket: "e-commerce-3a0f3.appspot.com",
    messagingSenderId: "566262270591",
    appId: "1:566262270591:web:bc29b39b7bf0dc5662cd4a",
    measurementId: "G-CQ8HXHLSSM"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth}