//Eigen JS geschreven

//Code voor een actief menu

$(document).ready(function () {
    $(".nav li").removeClass("active");//this will remove the active class from  
                                       //previously active menu item 
                                       
    $('#home').addClass('active');
  });

// Fade in en fade out van de nieuws blokken bij het opladen van de Nieuwspagina
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