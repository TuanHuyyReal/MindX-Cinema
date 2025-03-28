const switchTheme = document.querySelector("input.theme");
const html = document.querySelector("html");

switchTheme.addEventListener("click", () => {
  if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }
  return 0;
});
