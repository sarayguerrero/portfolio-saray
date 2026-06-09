
	$(function(){

	$(".logos").owlCarousel({
		items:1,
		nav:true,
		navText:['<i class="fa-solid fa-circle-arrow-left"></i>','<i class="fa-solid fa-circle-arrow-right"></i>'],
		loop:true,
		autoplay:true,
		autoplayHoverPause: true,
		autoplayTimeout:3000,
		autoplaySpeed:3000,
		navSpeed: 1500,      // Velocidad al usar las flechas
    	dotsSpeed: 1500,      // Velocidad al usar los puntos de abajo
    	margin: 32
	});

	$(".illus").owlCarousel({
		items:1,
		nav:true,
		navText:['<i class="fa-solid fa-circle-arrow-left"></i>','<i class="fa-solid fa-circle-arrow-right"></i>'],
		loop:true,
		autoplay:true,
		autoplayHoverPause: true,
		autoplayTimeout:3000,
		autoplaySpeed:3000,
		navSpeed: 1500,      // Velocidad al usar las flechas
    	dotsSpeed: 1500,     // Velocidad al usar los puntos de abajo
    	margin: 32
	});
	
});