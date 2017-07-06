$('#greeting').text("Hello, World!");

$('#essentials').css('backgroundColor', 'yellow');

$('#greeting').append('<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif">');

$('#essentials li').click(function() {
  var imgText = $(this).text()
  var imgTarget = "./images/" + imgText + ".jpeg"
    $('.selected').removeClass();
    $(this).toggleClass('selected');
    $('img[alt="beer"]').attr("src", imgTarget)
})

$('#ghosting').hover(function(){
  $(this).css('opacity', '0')
}, function(){
  $(this).css('opacity', '1')
})
