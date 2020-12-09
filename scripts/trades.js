//function to change color and font size of og
function hover() {
    var x = document.getElementById("box-a");
    x.style.color = 'gold'
    x.style.fontSize = 'xx-large'
}
//function to change back to og
function out() {
    var x = document.getElementById("box-a");
    x.style.color = 'white';
    x.style.fontSize = 'x-large'
}

// Get the img object using its Id 
img = document.getElementById("profile"); 
// Function to increase image size 
function enlargeImg() { 
  // Set image size to 1.5 times original 
  profile.style.transform = "scale(1.5)"; 
  // Animation effect  
  profile.style.transition = "transform 0.25s ease"; 
} 
// Function to reset image size 
function reset() { 
  // Set image size to original 
  img.style.transform = "scale(1)"; 
  img.style.transition = "transform 0.25s ease"; 
} 

// function to leave comments on trades
// maybe use an array to display more than one comment?
function comments() {
  var x = document.getElementById("comBox").value;
  document.getElementById("comment-here").innerHTML = x;
}