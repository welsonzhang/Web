$(document). ready(function() {
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)');
    $('tr:nth-child(odd)').addClass('alt');
    //$('td:contains(Henry)').addClass('highlight');
    //$('td:contains(Henry)').next().addClass('highlight');
    //$('td:contains(Henry)').nextAll().addClass('highlight');
    //$('td:contains(Henry)').parent().children().addClass('highlight');
    $('td:contains(Henry)').parent().find('td:eq)').addClass('highlight').end().find('td:eq)').addClass('highlight');

});

