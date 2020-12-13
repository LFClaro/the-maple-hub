"use strict";
// localStorage JSON CREATOR
let $ = function (id) {
  return document.getElementById(id);
};

function setRmbrEmail(enable, email, password) {
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

function findUser(email) {
  let index = db.usrEmails.indexOf('{"email": "' + email + '"}');
  return index;
}

function addUser(email, name, password, reminder, birthday, heardAboutUs, chkRcvMsg) {
  if (findUser(email) == -1) {
    db.usrEmails.push('{"email": "' + email + '"}');
    db.usrDetails.push('{"name": "' + name + '", "password": "' + password + '", "reminder": "' + reminder + '", "birthday": "' + birthday + '", "heardAboutUs": "' + heardAboutUs + '", "chkRcvMsg": "' + chkRcvMsg + '"}');
    localStorage.setItem("dbJSON", JSON.stringify(db));
    document.getElementById("debug").innerHTML = JSON.stringify(db);
    return true;
  }

  return false;
}

function removeUser(email) {
  let index = findUser(email);

  if (index > -1) {
    db.usrEmails.splice(index, 1);
    db.usrDetails.splice(index, 1);
    localStorage.setItem("dbJSON", JSON.stringify(db));
    document.getElementById("debug").innerHTML = JSON.stringify(db);
    return true;
  }

  return false;
}

let db;
let dbJSON = localStorage.getItem("dbJSON");

// CLEAR function to reset local storage
// localStorage.clear();

if (!dbJSON) {
  dbJSON = '{"usrEmails": [], "usrDetails": [], "config": {"rmbrEmail": {"enable": "false", "email": "", "password": ""}}}';
  localStorage.setItem("dbJSON", dbJSON);
}

db = JSON.parse(dbJSON);

if (db.config.rmbrEmail.enable == "true") {
  $("rmbrEmail").checked = true;
  $("email").value = db.config.rmbrEmail.email;
  $("password").value = db.config.rmbrEmail.password;
}