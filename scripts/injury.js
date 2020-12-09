// This function will pull data from inury.json and populate injuryies.html
$(function() {

    $.getJSON('../scripts/injury.json', function(data) {
      $.each(data.injuries, function(key, value) {
        $('#tbody').append(
            '<tr>' + 
                '<td>' + value.date + '</td>' +
                '<td>' + value.ply  + '</td>' +
                '<td>' + value.pos  + '</td>' +
                '<td>' + value.inj  + '</td>' +
            '</tr>'
        );
      });
  });

  })