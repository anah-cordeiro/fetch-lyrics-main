/*Change to Dark/Light Theme - tentar usar anonymous function*/
function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");

  }

  let themeBtn = document.querySelector(".themeBtn");
  themeBtn.addEventListener("click", changeTheme);