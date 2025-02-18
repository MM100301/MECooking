document.addEventListener("DOMContentLoaded", function() {
  const tagButton = document.getElementById("tagButton");
  const titleButton = document.getElementById("titleButton");

  let choice = "";

  function handleButtonClick(selectedChoice) {
    choice = selectedChoice;
    if (choice === "tag") {
      tagButton.style.backgroundColor = "red";
      titleButton.style.backgroundColor = "blue";
    } else if (choice === "title") {
      titleButton.style.backgroundColor = "red";
      tagButton.style.backgroundColor = "blue";
    }
  }

  tagButton.addEventListener("click", function() {
    handleButtonClick("tag");
  });

  titleButton.addEventListener("click", function() {
    handleButtonClick("title");
  });

  titleButton.addEventListener("click", function() {
    titleButton.style.backgroundColor = "red";
    tagButton.style.backgroundColor = "blue";
    choice = "title";
  })
});