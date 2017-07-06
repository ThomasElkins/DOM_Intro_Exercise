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

$('#resize').hover(function(){
  $(this).css('width', '400px')
}, function(){
  $(this).css('width', '200px')
})

$('#reset').click(function(){
  $('.selected').removeClass();
  $('img[alt="beer"]').attr("src", "./images/panic.jpeg")
})

$(document).keypress(function(){
  console.log(event.which)
  if (event.which >= 48 && event.which <= 57){
    alert("I HATE NUMBERZZZ")
  }
})


var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

neededkeys = [38,38,40,40,37,39,37,39,66,65], started = false, count = 0;
$(document).keydown(function(e) {
    key = e.keyCode;
    if (!started) {
        if (key == 38) {
            started = true;
        }
    }
    if (started) {
        if (neededkeys[count] == key) {
            count++;
        } else {
            reset();
        }
        if (count == 10) {
            reset();
            alert('Cheat Codes Activated');    
        }
    } else {
        reset();
    }
});
function reset() {
    started = false;
    count = 0;
}
