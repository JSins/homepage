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

// $('#dsgvo').click(function(){
//     if($(this).prop("checked") == true){
//         $('#absenden').show();
//     }
//     else if($(this).prop("checked") == false){
//         $('#absenden').hide();
//     }
// });

