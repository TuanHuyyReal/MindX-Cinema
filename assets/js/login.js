if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}
const submit = document.querySelector(".login-form button.sbm-btn");
const successContainer = document.querySelector("div.suc-container");
successContainer.classList.add("hidden");

function success() {
  successContainer.classList.remove("hidden");
  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      username: loginUsername,
      email: loginEmail,
      password: loginPw,
    })
  );
}
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let loginMessage = document.querySelector(".login-form small.message");
  loginMessage.classList.add("hidden");
  let loginUsername = document.querySelector(
    ".login-form input#username-input"
  ).value;
  let loginPw = document.querySelector(".login-form input#password").value;
  let loginEmail = document.querySelector(".login-form input#email").value;
  let users = localStorage.getItem("users");
  for (let i = 0; i < users.length; i++) {
    if (users[i].email != loginEmail) {
      continue;
    } else {
      if (
        loginUsername != localStorage.getItem("users").username ||
        loginPw != localStorage.getItem("users").password
      ) {
        console.log(localStorage.getItem("users"));
        loginMessage.classList.remove("hidden");
        loginMessage.innerHTML = "Invalid username or password";
      } else {
        success();
      }
    }
  }

  if (!loginUsername || !loginPw) {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Please enter enough infos";
  } else if (loginUsername.trim() == "" || loginPw.trim() == "") {
    loginMessage.classList.remove("hidden");
    loginMessage.innerHTML = "Please enter enough infos";
  } else {
    success();
  }

  // console.log([loginUsername, loginPw]);
});
