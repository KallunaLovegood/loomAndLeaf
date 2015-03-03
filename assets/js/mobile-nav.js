jQuery(document).ready(function($){
  

  $("#hamburger-container").on("click", function(){
    $("#hamburger-button").toggleClass("expanded");
    $("#mobile-nav").toggleClass("expanded");
  });



});