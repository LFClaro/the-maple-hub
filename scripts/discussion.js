const $$ = function (id) {
    document.getElementById(id);
}

"use strict";
$(document).ready(function() {
    $("#disc h3").click(function(evt) {
        $(this).toggleClass("down");
        if ($(this).attr("class") !== "down") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }); 
    $("#disc").find("a:first").focus();
}); 

function signIn() {
    location.href = "../lucas_code/login.html";
}

function members() {
    location.href = "../luiz_code/become_member.html";
}