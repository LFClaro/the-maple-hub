
// This function is used to get elements by id
const $ = function (id) {
    return document.getElementById(id);
}

// This function is used to select topic in the page
function selection () {
    let opt;
    for (let index = 1; index < 4; index++) {
        opt += "<option id = \"" + "news" + index + "\">" + $(index).textContent + "</option>";      
    }
    $('select').innerHTML = opt;
}

selection();

// For Submit button onclick event
window.onload = function () {
    $('subButton').onclick = submitButton;
}

// This function is designed to add comment for articles
function submitButton () {
        const t1 = document.createElement('h4');
        t1.textContent = $('name').value;
        const tt1 = document.createElement('p');
        tt1.textContent = $('com').value;
        const p1 = document.querySelector('#n1');
        p1.appendChild(t1);
        p1.appendChild(tt1);
    }
    
    // if($('1').textContent === $('news1').textContent)
    // {
        // const t1 = document.createElement('h4');
        // t1.textContent = $('name').value;
        // const tt1 = document.createElement('p');
        // tt1.textContent = $('com').value;
        // const p1 = document.querySelector('#n1');
        // p1.appendChild(t1);
        // p1.appendChild(tt1);

    // }
    // else if ($('2').textContent === $('news2').textContent) {
    //     const t1 = document.createElement('h4');
    //     t1.textContent = $('name').value;
    //     const tt1 = document.createElement('p');
    //     tt1.textContent = $('com').value;
    //     const p1 = document.querySelector('#n2');
    //     p1.appendChild(t1);
    //     p1.appendChild(tt1);

    // }
    //   else {
    //     const t1 = document.createElement('h4');
    //     t1.textContent = $('name').value;
    //     const tt1 = document.createElement('p');
    //     tt1.textContent = $('com').value;
    //     const p1 = document.querySelector('#n3');
    //     p1.appendChild(t1);
    //     p1.appendChild(tt1); }
// }

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