


$.fn.Up = function()
{
	var body = $(this);

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

	$(".up").on("click",function(){

		$("html,body").animate({
			scrollTop : 0
		},400 );

	});

	$(window).scroll(function(){

		var defaultTime = 300;

		if ($(this).scrollTop() > 300) 
		{
			$(".up").slideDown(defaultTime);

		}
		else
		{
			$(".up").slideUp(defaultTime);
		}
	});

};
