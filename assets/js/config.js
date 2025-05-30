export const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9";

window.handleSignOut = () => {
  localStorage.removeItem("currentUser");
  location.reload();
};

// Nếu người dùng đăng đăng nhập.

if (localStorage.getItem("currentUser")) {
  if (!JSON.parse(localStorage.getItem("currentUser")).avatar) {
    document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
      <div tabindex="0" class="avatar-action">
        <a href = "./account.html"><img src="${`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          JSON.parse(localStorage.getItem("currentUser")).username
        )}`}" /></a>
        <div class="popup">
          <button class="action-button" onclick="handleSignOut()">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    `;
  } else if (JSON.parse(localStorage.getItem("currentUser")).avatar) {
    document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
    <div tabindex="0" class="avatar-action">
      <a href = "./account.html"><img src="${
        JSON.parse(localStorage.getItem("currentUser")).avatar
      }" /></a>
      <div class="popup">
        <button class="action-button" onclick="handleSignOut()">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  `;
  } else {
    document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
    <a style="font-size: 25px" href="./login.html">
      <i class="fa-solid fa-right-to-bracket"></i>
    </a>
  `;
  }
}
