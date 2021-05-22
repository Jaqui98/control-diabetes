import firebase from 'firebase'

import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBMob3_0bL7CxX21-A7kHP4aw5ynvwr2jU",
    authDomain: "seminarioproyecto-6dbc2.firebaseapp.com",
    projectId: "seminarioproyecto-6dbc2",
    storageBucket: "seminarioproyecto-6dbc2.appspot.com",
    messagingSenderId: "384251908230",
    appId: "1:384251908230:android:dde53497fd9678c32ec107",
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
    firebase,
    db
}