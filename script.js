$(document).ready(function(){
    $('#mobile_nav img').click(function(){
        if ($('#sideNav').hasClass('mobile')) {
            $('#sideNav').animate({left:'-60px'});
            $('#sideNav').removeClass('mobile');
        } else {
            $('#sideNav').animate({left:'0'});
            $('#sideNav').addClass('mobile');
        }
    });
    $(window).resize(function(){
        $('#sideNav').removeClass('mobile');
        if($(window).width() >= 535){
            $('#sideNav').css('left','0');
        } else {
            $('#sideNav').css('left','-60px');
        }
    })
    
});