$(function () {
    $.getJSON('../scripts/teams.json', function (data) {
        $.each(data.teams, function (key, value) {
            $('#tbody').append(
                `<tr><td>${value.pos}</td><td><a id="${value.logo}" href="${value.site}" title="${value.name}" target="_blank">${value.name}</a></td><td>${value.gp}</td><td>${value.w}</td><td>${value.l}</td><td>${value.p}</td><td>${value.gf}</td><td>${value.ga}</td><td>${value.diff}</td><td>${value.l10}</td><td>${value.strk}</td></tr>`
            );
        });
    });
})