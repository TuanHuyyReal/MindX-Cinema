const submit = document.querySelector(".login-form button.sbm-btn");
const successContainer = document.querySelector("div.suc-container");
successContainer.classList.add("hidden");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let loginMessage = document.querySelector(".login-form small.message");
  loginMessage.classList.add("hidden");
  let loginUsername = document.querySelector(
    ".login-form input#username-input"
  ).value;
  let loginPw = document.querySelector(".login-form input#password").value;
  if (!loginUsername || !loginPw) {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Please enter enough infos";
  } else if (!(6 <= loginUsername.trim().length <= 18)) {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Your username has to be from 6 to 18 letters";
  } else if (loginUsername.trim() == "" || loginPw.trim() == "") {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Please enter enough infos";
  } else if (
    loginUsername != localStorage.getItem("username") ||
    loginPw != localStorage.getItem("password")
  ) {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Invalid username or password";
  } else {
    successContainer.classList.remove("hidden");
  }

  console.log([loginUsername, loginPw]);
});
