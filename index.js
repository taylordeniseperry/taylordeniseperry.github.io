$( document ).ready(function() {

    $('.box1').mouseover(function () {

    $('.inyourcorner_title').css('color', 'white');
})
    $('.box1').mouseout(function () {

    $('.inyourcorner_title').css('color', 'red');
})

    $('.box2').mouseover(function () {

    $('.graphicdesign_title').css('color', 'white');
})
    $('.box2').mouseout(function () {

    $('.graphicdesign_title').css('color', 'rgb(255,145,0)');
})

    $('.box3').mouseover(function () {

    $('.a1_title').css('color', 'white');
})
    $('.box3').mouseout(function () {

    $('.a1_title').css('color', 'rgb(65,255,0)');
})

    $('.box4').mouseover(function () {

    $('.mensa_title').css('color', 'white');
})
    $('.box4').mouseout(function () {

    $('.mensa_title').css('color', 'rgb(0,207,255)');
})

    $('.box5').mouseover(function () {

    $('.tdp_title').css('color', 'white');
})
    $('.box5').mouseout(function () {

    $('.tdp_title').css('color', 'rgb(161,0,255)');
})

    $('.box6').mouseover(function () {

    $('.other_title').css('color', 'white');
})
    $('.box6').mouseout(function () {

    $('.other_title').css('color', 'rgb(255,105,180)');
})

    window.sr = new scrollReveal();

$('.awesome-tooltip').tooltip({
        placement: 'left'
    });

    $(window).bind('scroll',function(e){
      dotnavigation();
    });

    function dotnavigation(){

        var numSections = $('section').length;

        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');
        $('section').each(function(i,item){
          var ele = $(item), nextTop;

          console.log(ele.next().html());

          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }

          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }

          var docTop = $(document).scrollTop();

          if(docTop >= thisTop && (docTop < nextTop)){
            $('#dot-nav li').eq(i).addClass('active');
          }
        });
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){

        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;

        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;

        $('html, body').animate({scrollTop:posi}, 'slow');

        return false;
    });

    $(".twitter_header").click(function(){
    $(".twitter_header").html("<a target='_blank' href='https://twitter.com/taydeniseperry?lang=en'>@taydeniseperry</a>");
});

    $(".email_header").click(function(){
    $(".email_header").html("<a target='_blank' href='mailto:taylordeniseperry@gmail.com'>taylordeniseperry@gmail.com</a>");
});

    $(".linkedin_header").click(function(){
    $(".linkedin_header").html("<a target='_blank' href='http://google.com'>Taylor Denise Perry</a>");
});

});