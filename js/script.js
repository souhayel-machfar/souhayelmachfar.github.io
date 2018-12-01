$(function(){
	// The login form entry page 
	$('.close-icon').on("click", function(){
		$(".login-box").toggleClass('hide-form');
	});
	$('.show-login').on("click", function(){
		$(".login-box").toggleClass('hide-form');
	});

	// The scroll button
		$(window).scroll(function(){
			if($(this).scrollTop() > 40){
				$("#scrollBtn").fadeIn();
			} else {
				$("#scrollBtn").fadeOut();
			}
		});

		$("#scrollBtn").click(function(){
			$('html').animate({
				scrollTop :0},800
			);
		});
});
