import firebase from "firebase/app";
import 'firebase/auth';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyBgRJtxwklCHJEBLsdKbIXldGw8bu6_v8Y",
        authDomain: "admin-template-c2ebd.firebaseapp.com",
        projectId: "admin-template-c2ebd",
        storageBucket: "admin-template-c2ebd.appspot.com",
        messagingSenderId: "604963035201",
        appId: "1:604963035201:web:dd3503cb33a4679b740ec0"      
    })
}
export default firebase

