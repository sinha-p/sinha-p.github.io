$(document).ready(function () {
    $(".scroll").click(function (event) {
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    $('.navicondiv').bind('mouseover', naviconclickevent);
    $('.slidemenucross').bind('click', slidemenuoutevent);

    function naviconclickevent() {
        $('section').animate({
            left: "20%"
        }, 200);
        $('.slidemenu').animate({
            left: "0%"
        }, 200);
    }

    function slidemenuoutevent() {
        $('section').animate({
            left: "0%"
        }, 200);
        $('.slidemenu').animate({
            left: "-25%"
        }, 200);
    }
});