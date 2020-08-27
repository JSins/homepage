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




$('.bereich').click(function(){
  $('#komfull').fadeIn(300);
  console.log(this.id);
  if(this.id == "komps")
  {
    $('#komboxleft').css({"background-image":"url(img/photoshop.jpg)"});
  }
  else if(this.id == "kompremiere")
  {
    $('#komboxleft').css({"background-image":"url(img/premiere.jpg)"});
  }
})


$('#komclose').click(function(){
  $('#komfull').fadeOut(300);
})


