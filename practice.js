//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBIpk8OW2uZbPHXgAiOA5hE5l66E4Tqtl8",
    authDomain: "kwitter-9bcfd.firebaseapp.com",
    databaseURL: "https://kwitter-9bcfd.firebaseio.com",
    projectId: "kwitter-9bcfd",
    storageBucket: "kwitter-9bcfd.appspot.com",
    messagingSenderId: "664922812135",
    appId: "1:664922812135:web:2cbbf836cc4a1b4bad3c42",
    measurementId: "G-TVC342W0BR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() 
{
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({ 
    purpose : "adding_user"
});
}