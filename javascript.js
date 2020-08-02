$(window).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 600) {
      $('#pageup').stop().fadeIn();
    } else {
      $('#pageup').stop().fadeOut();
    }
  });

$('#pageup').click(function(){
    $(window).scrollTop(0);
})

