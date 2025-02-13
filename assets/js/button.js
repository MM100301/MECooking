var button = document.getElementsByName("button");

button.onclick = changeColor();

function changeColor() {
  this.backgroundColor = "blue";
}