$( document ).ready(function() {

  $(".nav").hide();
    $(".navbar-toggle").on("click", function(){
        $(".nav").fadeToggle();
    });

});