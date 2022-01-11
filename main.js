import './style.css'

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

var width = window.innerWidth;
var height = window.innerHeight;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY; 
});

var $loop = setInterval(function(){
  $xp = Math.trunc($mouseX/width*100);
  $yp = Math.trunc($mouseY/height*100);

  if ($xp > 80) {
    $xp = 80;
  }
  if ($yp > 80) {
    $yp = 80;
  }

  $("#oeil1").css({left:$xp +'%', top:$yp +'%'});
  $("#oeil2").css({left:$xp +'%', top:$yp +'%'});
}, 30);

$loop;