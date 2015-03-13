$(document).ready(function(){

$( "#post1, #post2, #post3, #post4, #post5, #post6" ).hide();

$('.one').click(function() {
  $( "#post1" ).toggle( "slide" );

});

$('.two').click(function() {
  $( "#post2" ).toggle( "slide" ).complete;
});

$('.three').click(function() {
    $("#post3").toggle( "slide" ).complete;
});

$('.four').click(function() {
  $( "#post4" ).toggle( "slide" ).complete;
});

$('.five').click(function() {
  $( "#post5" ).toggle( "slide" ).complete;
});

$('.six').click(function() {
  $( "#post6" ).toggle( "slide" ).complete;
});

});



