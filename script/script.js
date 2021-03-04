//Eigen JS geschreven

//Code voor een actief menu

$(document).ready(function () {
    $(".nav li").removeClass("active");//this will remove the active class from  
                                       //previously active menu item 
                                       
    $('#home').addClass('active');
  });

// Fade in en fade out van de nieuws blokken bij het opladen van de pagina
$(document).ready(function(){
  $("#div1").fadeIn(2000);
  $("#div2").fadeIn(3000);
  $("#div3").fadeIn(4000);
  $("#div4").fadeIn(5000);
  $("#div5").fadeIn(6000);
  $("#div6").fadeIn(6000);
  $("#div7").fadeIn(6000);
  $("#div8").fadeIn(6000);
});