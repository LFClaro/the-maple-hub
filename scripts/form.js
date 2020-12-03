
// const s1 = document.createElement('option');
// const s2 = document.createElement('option');
// const s3 = document.createElement('option');
// s1.textContent = document.getElementById('1').textContent;
// s2.textContent = document.getElementById('2').textContent;
// s3.textContent = document.getElementById('3').textContent;
// const parent = document.getElementById('select');
// parent.appendChild(s1);
// parent.appendChild(s2);
// parent.appendChild(s3);

const $ = function (id) {
    return document.getElementById(id);
}

function selection () {
    let opt;
    for (let index = 1; index < 4; index++) {
        opt += "<option id = \"" + "news" + index + "\">" + $(index).textContent + "</option>";      
    }
    $('select').innerHTML = opt;
}

selection();

window.onload = function () {
    $('subBut').onclick = submitBut;
}

function submitBut () {
    
    // if(new1)
    //  {

        const t1 = document.createElement('h4');
        console.log("element created");
        t1.textContent = $('name').value;
        console.log("value received");
        const tt1 = document.createElement('p');
        console.log("p created");
        tt1.textContent = $('com').value;
        console.log("text area received");
        const p1 = $('n2');
        p1.appendChild(t1);
        p1.appendChild(tt1);
        console.log("Childern appended");


    //  }
    //  else if ($('select').lastChild) {

    //  }
    //  else {

    //  }

}