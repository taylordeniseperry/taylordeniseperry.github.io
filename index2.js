$( document ).ready(function() {

  $("body").css("display", "none");
  $("body").fadeIn(3000);

  $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

  $(".LinkedIn").click(function(){
    $(".LinkedIn").html("<a target='_blank' href='https://twitter.com/taydeniseperry?lang=en'>@taydeniseperry</a>");
});

    $(".Email").click(function(){
    $(".Email").html("<a target='_blank' href='mailto:taylordeniseperry@gmail.com'>taylordeniseperry@gmail.com</a>");
});

    $(".Resume").click(function(){
    $(".Resume").html("<a target='_blank' href='images/Taylor_Resume.pdf'>Taylor Perry</a>");
});

});