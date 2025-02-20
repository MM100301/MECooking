document.addEventListener("DOMContentLoaded", function() {
  const tagButton = document.getElementById("tagButton");
  const titleButton = document.getElementById("titleButton");
  const testText = document.getElementById("testText");
  const searchBar = document.getElementById("searchBar");

  function handleTagButtonClick() {
    tagButton.style.backgroundColor = "red";
    titleButton.style.backgroundColor = "blue";
    searchBar.classList.add("tagBar");
    searchBar.classList.remove("titleBar");
    testText.textContent = "Searching By Tag";
  }

  function handleTitleButtonClick() {
    titleButton.style.backgroundColor = "red";
    tagButton.style.backgroundColor = "blue";
    searchBar.classList.add("titleBar");
    searchBar.classList.remove("tagBar");
    testText.textContent = "Searching By Title";
  }

  tagButton.addEventListener("click", handleTagButtonClick);
  titleButton.addEventListener("click", handleTitleButtonClick);

});