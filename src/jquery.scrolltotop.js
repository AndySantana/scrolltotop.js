// protect your code
(function($, window){
	$.fn.Up = function( options )
	{
		// settings default values
		var settings = $.extend({}, $.fn.Up.defaults, options);

		// selector
		var body = $(this);

		//button to display
		var element = '<span class="up"><img src="img/sprites.png"></span>';

		$(body).prepend(element);

		$("span.up").css({
			"position" : "fixed",
			"bottom" : 50,
			"right" : 30,
			"background" : "#008080",
			"color" : "#fff",
			"padding" : "1em",
			"cursor" : "pointer",
			"border-radius" : "3px",
			"display" : "none"

		});

		// event handler
		$(".up").on("click",function(){
			$("html,body").animate({
				scrollTop : 0
			},400 );
		});

		// window scroll
		$(window).scroll(function(){
			if ($(this).scrollTop() > 300){
				$(".up").slideDown( settings.time );

			}else{
				$(".up").slideUp( settings.time );
			}
		});
	};

	// default values
	$.fn.Up.defaults = {
		time: 300
	};
})(jQuery, window);