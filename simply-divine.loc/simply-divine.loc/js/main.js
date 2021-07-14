$(document).ready(function () {
	if (window.jQuery) {
		let jQversion = $.fn.jquery;
		console.log("enabled jQuery version " + jQversion);
	}else{
		console.log("jQuery not found!");
	}
	$('.category-sliders__slider').slick({
		arrows: false,
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3
	});
	// $(window).scroll(function(cls){
	// 	var cls = $('.container-rulers__row');
	// 	// var anim = 'fadeInDown';
	// 	// cls.fadeOut(400);
	// 	if ($(document).scrollTop() + $(window).height() > cls.offset().top && $(document).scrollTop() - cls.offset().top < cls.height()){
	// 		cls.fadeIn(600);
	// 	} else {
	// 		cls.fadeOut(600);
	// 	}
	// })

});