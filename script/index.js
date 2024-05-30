// Pop Up Login
document.getElementById("login-button").addEventListener("click", function () {
  document.querySelector(".login-pop-up").style.display = "flex";
});

// Pop Up Regist
document.getElementById("regist-button").addEventListener("click", function () {
  document.querySelector(".login-pop-up").style.display = "none";
  document.querySelector(".regist-pop-up").style.display = "flex";
});

document
  .getElementById("submit-login-button")
  .addEventListener("click", function () {
    document.querySelector(".login-pop-up").style.display = "none";
  });

document
  .getElementById("submit-regist-button")
  .addEventListener("click", function () {
    document.querySelector(".regist-pop-up").style.display = "none";
    document.querySelector(".login-pop-up").style.display = "flex";
  });

document.getElementById("close-button").addEventListener("click", function () {
  document.querySelector(".login-pop-up").style.display = "none";
});

document
  .getElementById("close-button-regist")
  .addEventListener("click", function () {
    document.querySelector(".regist-pop-up").style.display = "none";
  });
