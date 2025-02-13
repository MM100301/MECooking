var button = document.getElementsByName("button");

button.onclick = changeColor();

function changeColor() {
  button.class = "blue";
  changedColor = true;
}