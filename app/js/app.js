// // Import vendor jQuery plugin example
import '~/app/libs/magnific_popup/jquery.magnific-popup.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})


$(function(){
	
	$('.accordeon-item').click(function(){
		$(this).toggleClass('active');
	});

});