document.addEventListener("DOMContentLoaded", function() {

  document.getElementsByClassName('titleBar').addEventListener('input', function() {
    var searchText = this.value;
    document.getElementById('testPara').innerText = searchText;
  });
});