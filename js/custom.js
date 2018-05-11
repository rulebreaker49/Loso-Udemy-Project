$(document).ready(function(){
	'use strict';

	if($(window).scrollTop()<80)
	{
		$('.navbar').css({
			'margin-top':'-100px',
			'opacity':'0'
		});
	}
	$(window).scroll(function(){
		'use strict';
		if($(window).scrollTop()<80)
		{
			$('.navbar').css({
				'margin-top':'-100px',
				'opacity':'0'
			});
		}
		else
		{
			$('.navbar').css({
				'margin-top':'0px',
				'opacity':'1'
			});
		}
	});
});
$(document).ready(function(){
	$('.nav-item, #move-top').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
			var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});
});
$(document).ready(function(){
	'use strict';
	$('.navbar-nav li a').click(function(){
		'use strict';
		$('.navbar-nav li a').parent().removeClass("active");
		$(this).parent().addClass("active");
	});
});
$(document).ready(function(){
	'use strict';
	$(window).scroll(function(){
		'use strict';
		$("section").each(function(){
			'use strict';
			var idd=$(this).attr("id");
			var oh=$(this).outerHeight();
			var topp=$(this).offset().top-70;
			if($(window).scrollTop()>topp && $(window).scrollTop()<topp+oh){
				$(".navbar-nav li a[href='#"+idd+"']").parent().addClass("active");
				$(".navbar-nav li a[href='#HOME']").parent().removeClass("active");
			}
			else
			{
				$(".navbar-nav li a[href='#"+idd+"']").parent().removeClass("active");
			}

 		});
 		$("header").each(function(){
			'use strict';
			var oh=$(this).outerHeight();
			var topp=$(this).offset().top-70;
			if($(window).scrollTop()>topp && $(window).scrollTop()<topp+oh){
				$(".navbar-nav li a[href='#HOME']").parent().addClass("active");
			}
			else
			{
				$(".navbar-nav li a[href='#HOME']").parent().removeClass("active");
			}

 		});
	});
});
$(document).ready(function(){
	'use strict';
	setInterval(function(){
		var windHeight=$(window).height();
		var contHeight=$(".container-header").height();
		var padd=windHeight-contHeight;
		$(".container-header").css({
			'padding-top':Math.round(padd/2)+'px',
			'padding-bottom':Math.round(padd/2)+'px'
		});

	},10)
});
$(document).ready(function() {
    
    var wid=$(window).width();
    $('.bxslider').bxSlider({
        
        slideWidth: 300,
        auto: true,
        infiniteLoop:true,
        minSlides: 1, 
        maxSlides: 3,
        slideMargin:50
    });
});
$(document).ready(function(){
	$('.counter-number').counterUp({
		delay:10,
		time:1500
	});
});
$(document).ready(function(){
	'use strict';
	new WOW().init();
});