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

// Filter ProductenPagina
function change() {
  let results = Array.from(document.querySelectorAll('.result > div'));
  // Hide all results
  results.forEach(function(result) {
    result.style.display = 'none';
  });
  // Filter results to only those that meet ALL requirements:
  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });
  // Show those filtered results:
  results.forEach(function(result) {
    result.style.display = 'block';
  });
}
change();