function hover() {
    var x = document.getElementById("box a");
    x.style.color = 'gold'
    x.style.fontSize = 'xx-large'
}


function out() {
    var x = document.getElementById("box a");
    x.style.color = 'white';
    x.style.fontSize = 'x-large'
}


function imageIN() {
    var img = document.getElementById("profile");
    img.style.maxWidth = '500px';
}

function imageOUT() {
    var img = document.getElementById("profile");
    img.style.maxWidth = '200px';
}