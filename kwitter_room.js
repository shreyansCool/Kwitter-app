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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
