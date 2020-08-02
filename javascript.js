$(window).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 600) {
      $('#pageup').fadeIn();
    } else {
      $('#pageup').fadeOut();
    }
  });

$('#pageup').click(function(){
    $(window).scrollTop(0);
})

