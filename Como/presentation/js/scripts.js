(function($) {
    "use strict"; 
		
	/* Navbar Scripts */
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
    
	
	/* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="#header" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });
	
	
	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function(){
		$(this).blur();
	});
		
})(jQuery);