jQuery(document).ready(function($){

  // actual code
	$('a[href*="#"]:not([href="#"])').on("click touchstart", function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	        || location.hostname == this.hostname)
	    {

	      var target = $(this.hash),
	      headerHeight = $(".site-navigation").height() + 5; // Get fixed header height

	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	      if (target.length)
	      {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500, 'swing');
	        return false;
	      }
	    }
	});
  
});
