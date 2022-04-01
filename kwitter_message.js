var firebaseConfig = {
    apiKey: "AIzaSyAQuWfTJRtZERkvyMWk1XHykokRLiLlwcI",
    authDomain: "kwitterdatabase-cb476.firebaseapp.com",
    databaseURL: "https://kwitterdatabase-cb476-default-rtdb.firebaseio.com",
    projectId: "kwitterdatabase-cb476",
    storageBucket: "kwitterdatabase-cb476.appspot.com",
    messagingSenderId: "274963781961",
    appId: "1:274963781961:web:6ff47503568a2939516298"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send()
{
   msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}