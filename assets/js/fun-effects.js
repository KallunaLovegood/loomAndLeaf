// FUN EFFECTS
jQuery(document).ready(function($){

// HOVER FOR COMFORT LEVELS PAGE
$( ".relaxed-firm" ).hover(
  function() {
    $(".firmscale-container").removeClass("non-hover");
    $("#relaxedfirm-snippet").show();
    $("#firm-snippet").hide();
  });

$(".firm").hover(
  function() {
    $(".firmscale-container").removeClass("non-hover");
    $("#relaxedfirm-snippet").hide();
    $("#firm-snippet").show();
  });






});