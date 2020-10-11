import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyD0k-V_RCNBo3u0LCEwYscvyhXBFObgbgA",
    authDomain: "facebook-messenger-clone-2b6e2.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-2b6e2.firebaseio.com",
    projectId: "facebook-messenger-clone-2b6e2",
    storageBucket: "facebook-messenger-clone-2b6e2.appspot.com",
    messagingSenderId: "713035664897",
    appId: "1:713035664897:web:3ef293a611d0e055cbba00",
    measurementId: "G-41EMHQHTLF"
})

const db = firebaseapp.firestore()

export default db