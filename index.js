document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});


var clrbox= document.getElementById("color-box")
var clrbox= document.getElementById("change-color-btn")

function getRandomColor() {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Pad with zeros if necessary to ensure the color code is always 6 digits
  return `#${randomColor.padStart(6, '0')}`;
}

console.log(getRandomColor());

function myfunction(){
  var element = document.getElementById ("color-box")
    element.style.backgroundColor = getRandomColor();
  }
