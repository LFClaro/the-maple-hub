//This function is used to show or hide discussions

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

//This function direct reader to sign in page
function signIn() {
    location.href = "../lucas_code/login.html";
}

//This function direct reader to sign up page
function members() {
    location.href = "../luiz_code/become_member.html";
}