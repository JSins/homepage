$(document).ready(function(){
  setTimeout(function(){
    $('main').fadeTo(200, 1);
    $('footer').fadeTo(200, 1);
  }, 200)
});


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

$(window).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 600) {
      $('#pageup').css("transform", "scale(1)");
    } else {
      $('#pageup').css("transform", "scale(0)");
    }
  });

// $('#pageup').click(function(){
//     $(window).scrollTop(0);
// })

$('#pageup').click(function(){
  scrollToTop();
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
  $('#komfull').fadeIn(200);
  $('body').css({"overflow":"hidden"});
  if(this.id == "komps")
  {
    $('#komboxleft').css({"background-image":"url(img/photoshop.jpg)"});
    $('#komboxrighttext').html("<h3>Bildbearbeitung</h3><p>Die Bildbearbeitung ist die Veränderung von Fotos, Negativen, Dias oder digitalen Bildern. Sie ist zu unterscheiden von der Bildverarbeitung, mit deren Hilfe die Inhalte von Bildern verarbeitet werden.</p>");
  }
  else if(this.id == "kompremiere")
  {
    $('#komboxleft').css({"background-image":"url(img/premiere.jpg)"});
  }
  else if(this.id == "komaudition")
  {
    $('#komboxleft').css({"background-image":"url(img/audition.jpg)"});
  }
  else if(this.id == "komweb")
  {
    $('#komboxleft').css({"background-image":"url(img/web.jpg)"});
  }
  else if(this.id == "komanwendung")
  {
    $('#komboxleft').css({"background-image":"url(img/csharp.jpg)"});
  }
  else if(this.id == "komunity")
  {
    $('#komboxleft').css({"background-image":"url(img/unity.jpg)"});
  }
})


$('#komclose').click(function(){
  $('#komfull').fadeOut(200);
  $('body').css({"overflow":"visible"});
})


