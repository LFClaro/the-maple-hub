//function to change color and font size of og
function hover(id) {
  id.style.color = 'gold';
  id.style.fontSize = 'xx-large';
}
//function to change back to og
function out(id) {
  id.style.color = 'white';
  id.style.fontSize = 'x-large';
}
// Function to increase image size 
function enlargeImg(id) { 
  // Set image size to 1.5 times original 
  id.style.transform = "scale(1.2)"; 
  // Animation effect  
  id.style.transition = "transform 0.25s ease"; 
} 
// Function to reset image size 
function reset(id) { 
  // Set image size to original 
  id.style.transform = "scale(1)"; 
  id.style.transition = "transform 0.25s ease"; 
} 
// function to leave comments on trades
//function comments() {
  //var x = document.getElementById("comBox").value;
  //document.getElementById("comment-here").innerHTML = x;
//}
function comments1(id) {
  var x = document.getElementById("c1").value;
  document.getElementById("comment-here1").innerHTML = x;
}
function comments2(id) {
  var x = document.getElementById("c2").value;
  document.getElementById("comment-here2").innerHTML = x;
}
function comments3(id) {
  var x = document.getElementById("c3").value;
  document.getElementById("comment-here3").innerHTML = x;
}