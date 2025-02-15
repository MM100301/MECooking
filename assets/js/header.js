document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const body = document.querySelector("body");

  window.addEventListener("scroll", function() {
    if (window.scrollY < 30) {
      console.log("Removing sticky class");
      body.classList.remove("sticky");
    } else {
      console.log("Adding sticky class");
      body.classList.add("sticky");
    }
  });
});