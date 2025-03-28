const signUpSubmit = document.querySelector(
  ".signup-form button.signup-sbm-btn"
);
signUpSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let signupMessage = document.querySelector(
    ".signup-form small.signup-message"
  );
  signupMessage.classList.add("hidden");
  signupMessage.innerHTML = "";
  let username = document.querySelector(
    ".signup-form input#signup-username-input"
  ).value;
  let email = document.querySelector(
    ".signup-form input#signup-email-input"
  ).value;
  let password = document.querySelector(
    ".signup-form input#signup-password"
  ).value;
  let confirmPass = document.querySelector(
    ".signup-form input#signup-confirm-pass"
  ).value;
  // code mượn trên stackoverflow
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
  };
  console.log(validateEmail(email));
  const validateUsn = (username) => {
    return 6 <= username.trim().length && username.trim().length <= 18
      ? true
      : false;
  };
  console.log(validateUsn(username));
  if (!username || !email || !password || !confirmPass) {
    signupMessage.classList.remove("hidden");
    signupMessage.textContent += "Please enter enough infos.";
  } else if (
    username.trim() == "" ||
    email.trim() == "" ||
    password.trim() == "" ||
    confirmPass.trim() == ""
  ) {
    signupMessage.classList.remove("hidden");
    signupMessage.textContent += "Please enter enough infos.";
  } else if (validateUsn == false) {
    signupMessage.classList.remove("hidden");
    signupMessage.innerHTML += "Your username has to be from 6 to 18 letters.";
  }
  // if pw != confPw => signupMessage
  else if (
    password != confirmPass &&
    (confirmPass.trim() != "" || password.trim() != "")
  ) {
    signupMessage.classList.remove("hidden");
    signupMessage.textContent +=
      "Please sure that you entered the correct confirmation.";
  } else if (username == localStorage.getItem("username")) {
    signupMessage.classList.remove("hidden");
    signupMessage.innerHTML = "Username has been used!";
  } else if (email == localStorage.getItem("email")) {
    signupMessage.classList.remove("hidden");
    signupMessage.innerHTML += "Email has been used!";
  } else if (!validateEmail(email)) {
    signupMessage.classList.remove("hidden");
    signupMessage.innerHTML += "You did not redeem an email with correct form.";
  } else {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("You have registered in successfully!");
    location.reload();
  }

  console.log([username, email, password]);
});
