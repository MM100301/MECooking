document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const threshold = 100; // Set the scroll threshold
  const header = document.querySelector("header"); // Assuming you have a header element

  window.addEventListener("scroll", function() {
    if (window.scrollY > threshold) {
      console.log("Removing sticky class");
      header.classList.remove("sticky");
    } else {
      console.log("Adding sticky class");
      header.classList.add("sticky");
    }
  });
});