import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDJoe_Hxfq5X3HWfK9kkFP6UQjvynAOpPc",
        authDomain: "contact-form-333c6.firebaseapp.com",
        projectId: "contact-form-333c6",
        storageBucket: "contact-form-333c6.appspot.com",
        messagingSenderId: "991306561467",
        appId: "1:991306561467:web:250b02fb37bc9f6f88b69e",
        measurementId: "G-CCMMQQH9NN"


}); 

const db = firebaseApp.firestore();  

export {db};  

  