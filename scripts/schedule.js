"use strict";

let $ = function(id) {
    return document.getElementById(id);
};

let currentYear = 2020;
let currentMonth = 9;
let rawEvents;

/* Read a local text file */
function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState == 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }

    rawFile.send(null);
}

/* Fetch the events from the pertinent json file */
function fetchEvents() {
    readTextFile("../scripts/schedule_events.json", function(text) {
        rawEvents = JSON.parse(text);
        addEventsToTheCalendar();
    });
}

/* Create the generic modal */
function createModal() {       
    let modal = $("myModal");
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/* Load the calendar again based on the month shift indicated */
function updateCurrentMonth(shift) {
    let date = new Date(currentYear, currentMonth);
    date.setMonth(date.getMonth() + shift);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
    $("calendar-header-title").innerHTML = date.toLocaleString("default", {month: "long"}) + " " + date.getFullYear();
    createCalendar(currentYear, currentMonth);
    addEventsToTheCalendar();
}

/* Create the calendar based on year and month indicated */
function createCalendar(year, month) {  
    let date = new Date(year, month);
    let cal = "<div class='grid-calendar-body'>";

    for (let i = 0; i < date.getDay(date); i++) {
        cal += "<div class='grid-calendar-item'></div>";
    }

    do {
        cal += "<div id='calendar-item-" + date.getFullYear() + date.getMonth() + date.getDate() + "' class='grid-calendar-item'>" + date.getDate() + "</div>";
        date.setDate(date.getDate() + 1);
    } while (date.getMonth() == month);

    if (date.getDay(date) != 0) {
        for (let i = date.getDay(date); i < 7; i++) {
            cal += "<div class='grid-calendar-item'></div>";
        }
    }

    cal += "</div>";
    $("grid-calendar-background").innerHTML = cal;
}

/* Add events to the calendar based on the current year and month */
function addEventsToTheCalendar() {
    let indexYear = rawEvents.years.indexOf("" + currentYear);
    if (indexYear > -1) {
        let indexMonth = rawEvents.yearsMonths[indexYear].indexOf("month" + currentMonth);
        if (indexMonth > -1) {     
            let events = rawEvents.yearsMonthsDays[indexYear][indexMonth];
            for (let i = 0; i < events.length; i++) {
                $("calendar-item-" + currentYear + currentMonth + events[i].day).innerHTML = " \
                    <div class='grid-calendar-item-event' onclick='showEventDetails(this, \"" + events[i].gameField + "\", \"" + events[i].time + "\")'>" + events[i].day + "\
                        <div> \
                            <img src='" + events[i].homeTeam.img + "' alt='" + events[i].homeTeam.name + " Ico'><br> \
                            <span>" + events[i].homeTeam.name + "<br></span><br> \
                            VS<br><br> \
                            <img src='" + events[i].visitingTeam.img + "' alt='" + events[i].visitingTeam.name + " Ico'><br> \
                            <span>" + events[i].visitingTeam.name + "</span> \
                        </div> \
                    </div> \
                ";
            }
        }
    }
}

/* Show the modal details related to a specific event */
function showEventDetails(obj, gameField, time) {
    $("modal-content-event").innerHTML = obj.innerHTML;
    $("modal-content-event").innerHTML += "<br>" + gameField + " - " + time;
    $("modal-content-event").removeChild($("modal-content-event").firstChild);
    $("myModal").style.display = "block";
}

createCalendar(currentYear, currentMonth);
fetchEvents();
createModal();