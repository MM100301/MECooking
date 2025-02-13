var button = document.getElementsByClassName("button");

button.onclick = changeColor();

function changeColor() {
  this.backgroundColor = "green";
}