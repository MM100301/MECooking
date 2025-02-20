document.addEventListener("DOMContentLoaded", function() {

  document.getElementsByClassName('tagBar').addEventListener('input', function() {
    var searchText = this.value;
    document.getElementById('testPara').innerText = searchText;
  });
});