//Login user
const login = document.getElementById("login");
login.addEventListener('submit',  e => {
e.preventDefault();

//get user info
const email = document.getElementById("User").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email , password)
.then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    location.replace("./homepage.html");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Incorrect email or Password")
  });
})