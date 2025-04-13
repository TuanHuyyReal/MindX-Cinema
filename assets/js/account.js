const submit = document.querySelector("button");
const profile = document.querySelector(".profile-container");
const avatar = document.querySelector("img.avatar");
const username = document.querySelector("span.username");
const edit = document.querySelector("button.edit");
clearTimeout();

function setTimeoutAnimation() {
  setTimeout(() => {
    display.style.animation = "slideIn 1s ease";
  }, 100);
}
function updateInfo() {
  // update thong tin ng dung vao profile
  // avatar : true => avatar cua ng dung, false => avatar mac dinh
  if (!JSON.parse(localStorage.getItem("currentUser")).avatar) {
    avatar.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
      JSON.parse(localStorage.getItem("currentUser")).username
    )}`;
  } else {
    avatar.src = `${JSON.parse(localStorage.getItem("currentUser")).avatar}`;
  }
  // update usn + email
  username.innerHTML = `Name: ${
    JSON.parse(localStorage.getItem("currentUser")).username
  }`;
}
function verify() {
  let verifyPrompt = prompt("Enter your password to verify");
  if (
    verifyPrompt == JSON.parse(localStorage.getItem("currentUser")).password
  ) {
    return true;
  }
  return false;
}
updateInfo();
const display = document.querySelector(".profile-display");
submit.addEventListener("click", () => {
  clearTimeout();

  // cập nhật thông tin ng dùng vào local storage
  let usernameValue = document.querySelector("input#nameInp").value;
  let avatarValue = document.querySelector("input#avatarInp").value;
  if (usernameValue.trim() === "") {
    usernameValue = JSON.parse(localStorage.getItem("currentUser")).username;
  } else if (avatarValue.trim() === "") {
    avatarValue = JSON.parse(localStorage.getItem("currentUser")).avatar;
  }

  let newInfo = {
    username: usernameValue,
    email: JSON.parse(localStorage.getItem("currentUser")).email,
    avatar: avatarValue,
    password: JSON.parse(localStorage.getItem("currentUser")).password,
  };
  console.log(newInfo);
  if (verify()) {
    // nếu verify thành công thì add thêm avatar key vào user
    JSON.parse(localStorage.getItem("users")).forEach((user) => {
      if (
        user["email"] ==
        JSON.parse(localStorage.getItem("currentUser"))["email"]
      ) {
        user.name = newInfo.username;
        user.avatar = newInfo.avatar;
        return user;
      }
      return user;
    });
    localStorage.setItem("currentUser", JSON.stringify(newInfo));
    updateInfo();
    setTimeoutAnimation();
  } else alert("Wrong password");
});

updateInfo();
edit.addEventListener("click", () => {
  clearTimeout();

  let editInfo = prompt("What do you want to edit? (name, email, avatar)");
  let editInformation = {
    username: JSON.parse(localStorage.getItem("currentUser")).username,
    email: JSON.parse(localStorage.getItem("currentUser")).email,
    avatar: JSON.parse(localStorage.getItem("currentUser")).avatar,
    password: JSON.parse(localStorage.getItem("currentUser")).password,
  };
  console.log(editInformation);
  switch (editInfo.toLowerCase().trim()) {
    case "name":
      let newName = prompt("Enter new name");
      editInformation["username"] = newName;
      break;
    case "avatar":
      let newAvatar = prompt("Enter a new link of avatar");
      editInformation["avatar"] = newAvatar;
      break;
  }
  if (verify()) {
    JSON.parse(localStorage.getItem("users")).forEach((user) => {
      if (user.email == JSON.parse(localStorage.getItem("currentUser")).email) {
        user["username"] = editInformation.username;
        user["avatar"] = editInformation.avatar;
        console.log(user);
        return user;
      }
      return user;
    });
    localStorage.setItem("currentUser", JSON.stringify(editInformation));
    updateInfo();
  } else alert("Wrong password");
  setTimeoutAnimation();
});
