document.addEventListener("DOMContentLoaded", () => {
	$('up').hide();
	var waypoint = new Waypoint({
	  element: document.querySelector('.scrll'),
	  handler: function(direction) {
	    // console.log(direction);
	    if(direction == "down"){
	    	$('.up').animate({
	    		opacity: "1",
	    		bottom: "10px"
	    	}, function(){
	    		$('up').show();
	    	});
	    }
	    if(direction == "up"){
	    	$('.up').animate({
	    		bottom: "-25px",
	    		opacity: "0"
	    	}, function(){
	    		$('up').hide();
	    	});
	    }
	  }
	})
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  });

  window.addEventListener('load', () => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      window.scrollTo(0, Number(scrollY));
    }
  });