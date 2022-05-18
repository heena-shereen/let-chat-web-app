
 // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDsfRfvi93lCoI8swYaZ8i2OBdp-qZOlPI",
      authDomain: "kwitter-36029.firebaseapp.com",
      databaseURL: "https://kwitter-36029-default-rtdb.firebaseio.com",
      projectId: "kwitter-36029",
      storageBucket: "kwitter-36029.appspot.com",
      messagingSenderId: "481834181590",
      appId: "1:481834181590:web:34bf1812ce9a4d0a69ba77"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html" ;
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}