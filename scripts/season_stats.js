"use strict";

let $ = function(id) {
    return document.getElementById(id);
};

/* Add a tooltip to the obj indicated */
function createTooltip(obj, tooltipText) {
    if (!obj.classList.contains("tooltipOwner")) {
        let newTooltip = document.createElement("span");
        newTooltip.className = "tooltiptext";
        newTooltip.innerHTML = tooltipText;   
        obj.appendChild(newTooltip);
        obj.className = "tooltipOwner";
    }
}

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

/* Feach the stats from the pertinent json file and populates the tables */
readTextFile("../scripts/season_stats.json", function(text) {
    let data = JSON.parse(text);
    
    /* Polulates the Team Statistics Table */
    data.teamStats.forEach(el => {
        $('t1-data').innerHTML += "\
            <tr role='row'>\
                <td role='cell'>" + el.Team + "</td>\
                <td role='cell'>" + el.AvAge + "</td>\
                <td role='cell'>" + el.GP + "</td>\
                <td role='cell'>" + el.W + "</td>\
                <td role='cell'>" + el.L + "</td>\
                <td role='cell'>" + el.OL + "</td>\
                <td role='cell'>" + el.PTS + "</td>\
                <td role='cell'>" + el.PTS_porcentage + "</td>\
                <td role='cell'>" + el.GF + "</td>\
                <td role='cell'>" + el.GA + "</td>\
                <td role='cell'>" + el.TGG + "</td>\
                <td role='cell'>" + el.PP + "</td>\
                <td role='cell'>" + el.PPO + "</td>\
                <td role='cell'>" + el.PP + "</td>\
                <td role='cell'>" + el.PPA + "</td>\
                <td role='cell'>" + el.PPOA + "</td>\
            </tr>\
        ";
    });

    /* Polulates the Team Analytics Table */
    data.teamAnalytics.forEach(el => {
        $('t2-data').innerHTML += "\
            <tr role='row'>\
                <td role='cell'>" + el.Team + "</td>\
                <td role='cell'>" + el.S + "</td>\
                <td role='cell'>" + el.SV + "</td>\
                <td role='cell'>" + el.CF + "</td>\
                <td role='cell'>" + el.CA + "</td>\
                <td role='cell'>" + el.xGF + "</td>\
                <td role='cell'>" + el.xGA + "</td>\
                <td role='cell'>" + el.aGF + "</td>\
                <td role='cell'>" + el.aGA + "</td>\
                <td role='cell'>" + el.SCF + "</td>\
                <td role='cell'>" + el.SCA + "</td>\
                <td role='cell'>" + el.HDF + "</td>\
                <td role='cell'>" + el.HDA + "</td>\
                <td role='cell'>" + el.HDGF + "</td>\
                <td role='cell'>" + el.HDC + "</td>\
                <td role='cell'>" + el.HDGA + "</td>\
            </tr>\
        ";
    });
});