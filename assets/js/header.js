document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  window.addEventListener("scroll", function() {
    console.log("Scroll event detected");
    console.log("window.scrollY:", window.scrollY);

    if (window.scrollY > 0) {
      console.log("Removing sticky class");
      header.classList.remove("sticky");
    } else {
      console.log("Adding sticky class");
      header.classList.add("sticky");
    }
  });
});