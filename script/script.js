//Eigen JS geschreven

// Fade in en fade out van de nieuws blokken bij het inladen van de Nieuwspagina
$(document).ready(function(){
  $("#laatsteNieuws").css({"font-size": "80px", "position":"absolute", "top":"50%", "left":"5%"}).fadeOut(5000,
    function(){
      $("#div1").fadeIn(2000);
      $("#div2").fadeIn(3000);
      $("#div3").fadeIn(4000);
      $("#div4").fadeIn(5000);
      $("#div5").fadeIn(6000);
      $("#div6").fadeIn(6000);
      $("#div7").fadeIn(6000);
      $("#div8").fadeIn(6000);
    });
});