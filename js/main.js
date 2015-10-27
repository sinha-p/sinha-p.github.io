$(document).ready(function(){
    $(".scroll").click(function(event) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1500);
    });
   $('.navicondiv').bind('mouseover',naviconclickevent);
    $('.slidemenucross').bind('click',slidemenuoutevent);
    function naviconclickevent()
    {
$('section').animate({left:"20%"},200);       $('.slidemenu').animate({left:"0%"},200);
    }
    function slidemenuoutevent()
    {
$('section').animate({left:"0%"},200);      $('.slidemenu').animate({left:"-25%"},200);
    }
    $('#placard1').bind('mouseover',showplacard);
    $('#placard1').bind('mouseout',hideplacard);
    $('#placard2').bind('mouseover',showplacard);
    $('#placard2').bind('mouseout',hideplacard);
    $('#placard3').bind('mouseover',showplacard);
    $('#placard3').bind('mouseout',hideplacard);
    $('#placard4').bind('mouseover',showplacard);
    $('#placard4').bind('mouseout',hideplacard);
    function showplacard()
    {
        $(this).find('.innerplacard').animate({bottom:"-20%"},300);
    }
    function hideplacard()
    {
        $(this).find('.innerplacard').animate({bottom:"-40%"},300);
    }
});
