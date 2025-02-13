var button = document.getElementsByID("button");

button.onclick = changeColor();

function changeColor() {
  this.backgroundColor = "blue";
}