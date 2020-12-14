"use strict";

let $ = function(id) {
    return document.getElementById(id);
};

/* Check if is a valid email user, if the passwords match, and show a login status message */
function login() {
    let index = findUser($("email").value);

    if (index > -1) {
        if ($("password").value == JSON.parse(db.usrDetails[index]).password)  {
            setRmbrEmail($("rmbrEmail").checked, $("email").value, $("password").value);
            $("status").innerHTML = "<span id='loginSuccess'>Login successfully completed!</span>"    
        } else {
            $("status").innerHTML = "<span id='loginFail'>Login failed. Check your email and password provided.</span";
        }
    } else {
        $("status").innerHTML = "<span id='loginFail'>Login failed. Check your email and password provided.</span>";
    }
}

/* Show the message boxes related to Forgot Password feature, and show the reminder when pertinent */
function forgotPassword() {
    let email = prompt("Please enter your email", "my@email.com");

    if (email != null) {
        let index = findUser(email);
        if (findUser(email) > -1) {
            alert("Your password reminder: " + JSON.parse(db.usrDetails[index]).reminder);
        } else {
            alert("\nUser " + email + " not found. Please, check your email provided and try again.");
        }
    }
}

/* Persist the email and the password to be used for the Remember Email feature */
function setRmbrEmail(enable, email, password){
    db.config.rmbrEmail.enable = (enable ? "true" : "false");
    if (enable) {
        db.config.rmbrEmail.email = email;
        db.config.rmbrEmail.password = password;
    } else {
        db.config.rmbrEmail.email = "";
        db.config.rmbrEmail.password = "";
    }
    localStorage.setItem("dbJSON", JSON.stringify(db));
}

/* Return the index of the indicated user email in the user emails array */
function findUser(email) {
    let index = db.usrEmails.indexOf('{"email": "' + email + '"}');
    return index;
}

/* Add a new user to the database */
function addUser(email, name, password, reminder, birthday, heardAboutUs, chkRcvMsg) {
    if (findUser(email) == -1) {
        db.usrEmails.push('{"email": "' + email + '"}');
        db.usrDetails.push('{"name": "' + name + '", "password": "' + password + '", "reminder": "' + reminder + '", "birthday": "' + birthday + '", "heardAboutUs": "' + heardAboutUs + '", "chkRcvMsg": "' + chkRcvMsg + '"}');
        localStorage.setItem("dbJSON", JSON.stringify(db));
        return true;
    }

    return false;
}

/* Remove the indicated user */
function removeUser(email) {
    let index = findUser(email);

    if (index > -1) {
        db.usrEmails.splice(index, 1);
        db.usrDetails.splice(index, 1);
        localStorage.setItem("dbJSON", JSON.stringify(db));
        return true;
    }

    return false;
}

let db;
let dbJSON = localStorage.getItem("dbJSON");

/* Create the database when first time execution */
if (!dbJSON) {  
    dbJSON = '{"usrEmails": [], "usrDetails": [], "config": {"rmbrEmail": {"enable": "false", "email": "", "password": ""}}}';
    localStorage.setItem("dbJSON", dbJSON);
}

db = JSON.parse(dbJSON);

/* Check if the Remember Email feature is pertinent, and perform it */
if (window.location.pathname == "/lucas_code/login.html") {
    if (db.config.rmbrEmail.enable == "true") {
        $("rmbrEmail").checked = true;
        $("email").value = db.config.rmbrEmail.email;
        $("password").value = db.config.rmbrEmail.password;
    }
}