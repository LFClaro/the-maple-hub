$(function () {
    $(document).tooltip();
    $("#BOB").tooltip({ content: '<img src="../images/teams/BOB.png" />' });
    $("#TBL").tooltip({ content: '<img src="../images/teams/TBL.png" />' });

    $.getJSON('../scripts/teams.json', function (data) {
        $.each(data.teams, function (key, value) {
            $('#tbody').append(
                '<tr>' +
                '<td>' + value.pos + '</td>' +
                '<td><span id="' + value.logo + '" title="' + value.name + '">' + value.name + '</span></td>' +
                '<td>' + value.gp + '</td>' +
                '<td>' + value.w + '</td>' +
                '<td>' + value.l + '</td>' +
                '<td>' + value.p + '</td>' +
                '<td>' + value.gf + '</td>' +
                '<td>' + value.ga + '</td>' +
                '<td>' + value.diff + '</td>' +
                '<td>' + value.strk + '</td>' +
                '</tr>'
            );
        });
    });
})