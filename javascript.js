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



function burgerout(){
  $('#refnav').show('slow');
  $('#burger').html('<i class="far fa-caret-square-down"></i>');
  $('#burger').attr('onclick', 'burgerin()');
  $('#burger').attr('id', 'burgerout');
}

function burgerin(){
  $('#refnav').hide('slow');
  $('#burgerout').html('<i class="fas fa-caret-square-down"></i>');
  $('#burgerout').attr('onclick', 'burgerout()');
  $('#burgerout').attr('id', 'burger');
}

