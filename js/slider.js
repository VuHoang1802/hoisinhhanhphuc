
$(document).ready(function(){

	$('.banner').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed: 2000

	});
	$('.feed').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed: 4000,
	  arrows: true,
	  prevArrow: '<div class="slick-prev"><</div>',
	  nextArrow: '<div class="slick-next">></div>'

	});
});


