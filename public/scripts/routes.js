page('/', function(){
    $("#library").hide();
    $("#features").show();
});

page('/library', function(){
    $("#library").show();
    $("#features").hide();
});

page();