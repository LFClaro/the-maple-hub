"use strict";

    let $ = function (id) {
      return document.getElementById(id);
    };

    function findUser(name, email, password) {
      let index = db.users.indexOf('{"name": "' + name + '", "email": "' + email + '", "password": "' + password + '"}');
      return index;
    }

    function addUser(name, email) {
      if (findUser(name, email) == -1) {
        db.users.push('{"name": "' + name + '", "email": "' + email + '"}');
        localStorage.setItem("dbJSON", JSON.stringify(db));
        document.getElementById("debug").innerHTML = db.users;
        return true;
      }

      return false;
    }

    function removeUser(name, email) {
      let index = findUser(name, email);

      if (index > -1) {
        db.users.splice(index, 1);
        localStorage.setItem("dbJSON", JSON.stringify(db));
        document.getElementById("debug").innerHTML = db.users;
        return true;
      }

      return false;
    }

    let db;
    let dbJSON = localStorage.getItem("dbJSON");

    if (!dbJSON) {
      dbJSON = '{"users": [], "config": {"rmbrEmail": {"enable": "Y", "name": "lucas", "email": "lucasemail"}}}';
      localStorage.setItem("dbJSON", dbJSON);
    }

    db = JSON.parse(dbJSON);

    if (db.config.rmbrEmail.enable == "Y") {
      $("name").value = db.config.rmbrEmail.name;
      $("email").value = db.config.rmbrEmail.email;
    }