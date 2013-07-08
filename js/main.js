var windowWidth
// nav tab event
$('.nav-btn').on('click' , function(){
  if($(this).next().css('display')=='none')
    $(this).next().fadeIn();
  else
    $(this).next().fadeOut();
  return false;
});
$(document).on('click' , function(){
    if(windowWidth <= 640)
    {
        $('header nav').fadeOut();
    }
})

// move the more link after picture
var windowResize = function(){
  windowWidth = $(window).width();
  var isMobile = 1;
  if(windowWidth < 640)
  {
      $('.cs_item').each(function(){
          var picWrap = $(this).find('div').eq(0);
          var more = $(this).find('.csLearnmore');
          more.insertAfter(picWrap);
      });
      isMobile = 1;
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
          viewportmeta.content = 'width=640, minimum-scale=0.5, maximum-scale=2.0';
      }

      $('.home_wrap .home_nav img,.home_wrap .right_box img,.star_wrap .product_image img').each(function(){
          var imgSource = $(this).attr('src');
          var mobileImgSource = imgSource.replace('/common','/m');
          mobileImgSource = imgSource.replace('/pc','/m');
          $(this).attr('src', mobileImgSource);
      });

      $('.clansing_wrap .feature_product').html('<img src="./images/pc/clansing_product.png" />');
  }
  else
  {
      $('.home_wrap .home_nav img,.home_wrap .right_box img,.star_wrap .product_image img').each(function(){
          var imgSource = $(this).attr('src');
          var mobileImgSource = imgSource.replace('/m','/pc');
          $(this).attr('src', mobileImgSource);
      });
      $('.clansing_wrap .feature_product img').remove();
  }


};

$(window).on('resize',windowResize).resize();

$('#video').fancybox({
    scrolling : false,
    width: 600,
    height: 338,
    padding: 0,
    type: 'ajax',
    scrolling: 'no',
    helpers: {
        overlay : {
            closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
            speedOut   : 200,   // duration of fadeOut animation
            showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
            locked     : false   // if true, the content will be locked into overlay
        },
        title : {
            type : 'float' // 'float', 'inside', 'outside' or 'over'
        }
    }
});

  $('#mobilemail').fancybox({
        closeBtn:false,
        scrolling : false,
        padding: 0,
        scrolling: 'no'
      });
  $("#backbtn").click(function(){
    parent.$.fancybox.close();
  });

//mail
var SetMailForm=function(form,afterComplete){
    console.log(form);
  form.ajaxForm({
    beforeSubmit:  function(){
        return form.valid();
    },
    complete: function(xhr) {
      if(!afterComplete){
        if(xhr.responseText == 'state0')
        {
            $('.newsletter_popup .state0').show();
            $('.newsletter_popup .state1').hide();
            $('.newsletter_popup,.newsletter_overlay').fadeIn();
        }
        if(xhr.responseText == 'state1')
        {
          $('.newsletter_popup .state1').show();
          $('.newsletter_popup .state0').hide();
          $('.newsletter_popup,.newsletter_overlay').fadeIn();
        }
      }else{
        afterComplete(xhr)
      }
    }
  });
  form.validate(
  {
    rules: {
        email: { required: true, email:true}
    },
    messages: {
        email: { required: '请填写邮箱', email:'请填写正确的邮箱' }
    }
  });
}

SetMailForm($("#newsletter"));
SetMailForm($("#mobilenewsletter"),function(xhr){

    $('#backbtn').click();
    if(xhr.responseText == 'state0')
    {
        $('.newsletter_popup .state0').show();
        $('.newsletter_popup .state1').hide();
        $('.newsletter_popup,.newsletter_overlay').fadeIn();
    }
    if(xhr.responseText == 'state1')
    {
        $('.newsletter_popup .state1').show();
        $('.newsletter_popup .state0').hide();
        $('.newsletter_popup,.newsletter_overlay').fadeIn();
    }
});

$('.newsletter_overlay, .newsletter_popup_close').click(function(){
    $('.newsletter_popup,.newsletter_overlay').fadeOut();
});

if($('.no-touch').length>0)
{
    $('body').css({'-webkit-text-size-adjust':'auto'});
}

