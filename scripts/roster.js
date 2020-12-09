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

function hover2() {
  var x = document.getElementsByClassName("box a");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = 'gold';
    x[i].style.fontSize = 'x-large';
  }
}

function out2() {
  var x = document.getElementsByClassName("box a");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "white";
    x[i].style.fontSize = 'large';
  }
}

// possible case or if else solution for the above issues 

