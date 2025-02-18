document.addEventListener("DOMContentLoaded", function() {
  const tagButton = document.getElementById("tagButton");
  const titleButton = document.getElementById("titleButton");

  tagButton.addEventListener("click", function() {
    tagButton.style.backgroundColor = "red";
    titleButton.style.backgroundColor = "blue";
  });

  titleButton.addEventListener("click", function() {
    titleButton.style.backgroundColor = "red";
    tagButton.style.backgroundColor = "blue";
  })
});