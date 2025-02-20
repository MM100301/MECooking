document.addEventListener("DOMContentLoaded", function() {
  const tagButton = document.getElementById("tagButton");
  const titleButton = document.getElementById("titleButton");
  const testText = document.getElementById("testText");

  function handleTagButtonClick() {
    tagButton.style.backgroundColor = "red";
    titleButton.style.backgroundColor = "blue";
    testText.textContent = "Searching By Tag";
  }

  function handleTitleButtonClick() {
    titleButton.style.backgroundColor = "red";
    tagButton.style.backgroundColor = "blue";
    testText.textContent = "Searching By Title";
  }

  tagButton.addEventListener("click", handleTagButtonClick);
  titleButton.addEventListener("click", handleTitleButtonClick);

});