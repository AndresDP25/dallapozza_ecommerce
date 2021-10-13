import firebase from 'firebase/app'

import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDMqV6csA1h5oCRLruvXYAY-N4e7iUWqfI",
    authDomain: "dallapozza-ecommerce.firebaseapp.com",
    projectId: "dallapozza-ecommerce",
    storageBucket: "dallapozza-ecommerce.appspot.com",
    messagingSenderId: "642712588470",
    appId: "1:642712588470:web:f9ed29b91c0287d5651617"
  };

  const app = firebase.initializeApp(firebaseConfig)


  export function getFirestore(){

    return firebase.firestore(app)
  }