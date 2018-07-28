$(document).ready(function()) {
  $("a[href^='#']").click(function( event ) {
  	event.preventDefault();

  	var position = $($(this).attr("href")).offset().top;

  	$("body, html").animate({
  		scrollTop: position
  	}, 1000 );
  });
});
