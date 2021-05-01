
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCpSz_yd8A89WmtLl7_phs7SITGdJFblwY",
      authDomain: "kwitter-project-9da63.firebaseapp.com",
      projectId: "kwitter-project-9da63",
      storageBucket: "kwitter-project-9da63.appspot.com",
      messagingSenderId: "118962905334",
      appId: "1:118962905334:web:ce942242fc4e5056528cd7",
      measurementId: "G-901CM4LLXJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
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
