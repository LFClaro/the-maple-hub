// This function is used to get elements by id
const $ = function (id) {
    return document.getElementById(id);
}

// This function is used to select topic in the page
function selection () {
    let opt;
    for (let index = 1; index < 4; index++) {
        opt += "<option id = \"" + "oNews" + index + "\">" + $('hnews' + index).textContent + "</option>";      
    }
    $('selNews').innerHTML = opt;
}

selection();


// This function is designed to add comment for articles
function submitButton () {
    if($('hnews1').textContent == $('selNews').value)
    {
        const t1 = document.createElement('h4');
        t1.textContent = $('name').value;
        const tt1 = document.createElement('p');
        tt1.textContent = $('com').value;
        const p1 = document.querySelector('#dn1');
        p1.appendChild(t1);
        p1.appendChild(tt1);

    }
    else if ($('hnews2').textContent == $('selNews').value) {
        const t1 = document.createElement('h4');
        t1.textContent = $('name').value;
        const tt1 = document.createElement('p');
        tt1.textContent = $('com').value;
        const p1 = document.querySelector('#dn2');
        p1.appendChild(t1);
        p1.appendChild(tt1);

    }
      else {
        const t1 = document.createElement('h4');
        t1.textContent = $('name').value;
        const tt1 = document.createElement('p');
        tt1.textContent = $('com').value;
        const p1 = document.querySelector('#dn3');
        p1.appendChild(t1);
        p1.appendChild(tt1); }
}

// For Clear button onclick event

window.onload = function() {
    $('clrBut').onclick = clearButton;
}

// This function is designed to clear the form
function clearButton() {
    $('name').value = "";
    $('email').value = "";
    $('com').value = "";
    
}