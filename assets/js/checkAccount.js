const rqLogin = document.querySelector(".require .require-login");
const rqRegis = document.querySelector(".require .require-regis");

if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
} else {
  location.href = "./register-section.html";
}
