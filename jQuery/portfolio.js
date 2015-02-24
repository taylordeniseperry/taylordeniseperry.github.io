$(document).ready(function(){

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  target_offset = $('#about').offset(),
    target_top = target_offset.top;
    $('html, body').delay(2000).animate({
        scrollTop: target_top
    }, 2000);

  $(window).scroll(function(){
    if ($(this).scrollTop() > 820)
    { $('#menu').fadeIn(400);}
        else
    { $('#menu').fadeOut(400);}
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 550)
    { $('.skills, .abouttext').fadeIn(700);}
        else
    { $('.skills, .abouttext').fadeOut(700);}
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 3000)
    { $('#resume, #resumeimage').slideDown("fast","linear");}
        else
    { $('#resume, #resumeimage').slideUp("fast","linear");}
  });

});