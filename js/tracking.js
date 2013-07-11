$('nav a').eq(0).bind('click',function(){
    ga('send', 'event', 'home', 'BTN1', 'BTN1');
});
$('nav a').eq(1).bind('click',function(){
    ga('send', 'event', 'clean', 'BTN1', 'BTN1');
});
$('nav a').eq(2).bind('click',function(){
    ga('send', 'event', 'plan', 'BTN1', 'BTN1');
});
$('nav a').eq(3).bind('click',function(){
    ga('send', 'event', 'star', 'BTN1', 'BTN1');
});

$('.home_nav a').eq(0).bind('click',function(){
    ga('send', 'event', 'clean', 'BTN2', 'BTN2');
});

$('.home_nav a').eq(1).bind('click',function(){
    ga('send', 'event', 'plan', 'BTN2', 'BTN2');
});

$('.home_nav a').eq(2).bind('click',function(){
    ga('send', 'event', 'star', 'BTN2', 'BTN2');
});

$('footer a').eq(0).bind('click',function(){
    ga('send', 'event', 'Official', 'BTN1', 'BTN1');
});

$('footer a').eq(1).bind('click',function(){
    ga('send', 'event', 'Sina', 'BTN1', 'BTN1');
});

$('footer a').eq(2).bind('click',function(){
    ga('send', 'event', 'App', 'BTN1', 'BTN1');
});

$('footer a').eq(3).bind('click',function(){
    ga('send', 'event', 'Apply', 'BTN1', 'BTN1');
});

$('section nav .cleansing').bind('click',function(){
    ga('send', 'event', 'Star', 'BTN3', 'BTN3');
});

$('section nav .plan').bind('click',function(){
    ga('send', 'event', 'Plan', 'BTN3', 'BTN3');
});

$('section nav .star').bind('click',function(){
    ga('send', 'event', 'Star', 'BTN3', 'BTN3');
});

$('.plan_wrap .learnmore').eq(0).bind('click',function(){
    ga('send', 'event', 'Product', 'BTN1', 'BTN1');
});

$('.plan_wrap .learnmore').eq(1).bind('click',function(){
    ga('send', 'event', 'Product', 'BTN2', 'BTN2');
});

$('.plan_wrap .learnmore').eq(2).bind('click',function(){
    ga('send', 'event', 'Product', 'BTN3', 'BTN3');
});

$('.plan_wrap .learnmore').eq(3).bind('click',function(){
    ga('send', 'event', 'Product', 'BTN4', 'BTN4');
});

$('.star_wrap .learnmore').bind('click',function(){
    ga('send', 'event', 'Product', 'BTN5', 'BTN5');
});