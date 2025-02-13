document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", changeColor);
  }

  function changeColor() {
    button.style.backgroundColor = "blue";
  }
});