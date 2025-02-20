document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('searchBar').addEventListener('input', function() {
    var searchText = this.value;
    document.getElementById('testPara').innerText = searchText;
  });
});