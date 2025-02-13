document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");

  if (button) {
    button.addEventListener("click", changeColor);
  }

  function changeColor() {
    var elements = document.querySelectorAll(".change");
    elements.forEach(function(element) {
      element.style.color = "black";
    });
  }
});