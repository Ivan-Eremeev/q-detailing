//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= fotorama.js
$(document).ready(function () {

	// MOBILE MENU
	var menuBtn = $('#menu-btn');
	var menuHide = $('#menu-hide');
	var hamburger = $('.hamburger');
	var time = 250;
	menuBtn.click(function() {
		if (menuHide.css('display') == 'none') {
			menuHide.slideDown(time, function() {
				menuHide.css('display','block');
			});
		}
		else {
			menuHide.slideUp(time, function() {
				menuHide.css('display','none')
			});
		}
	});
	hamburger.click(function() {
		if (hamburger.hasClass('is-active')) {
			hamburger.removeClass('is-active');
		}
		else {
			hamburger.addClass('is-active');
		}
	});
	$(document).mouseup(function (e){
		var div = $("#menu-btn");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && $(window).width() < 720) {
			hamburger.removeClass('is-active');
			menuHide.slideUp(time, function() {
				menuHide.css('display','none')
			});
		}
	});
	var lastId,
	    topMenu = $("#menu-hide"),
	    topMenuHeight = topMenu.outerHeight()+0,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});

	// SLIDER CAROUSEL
	var slider = $('#slider');
	slider.owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		dotsContainer:'.slider_dots'
	});
	$('.slider_NextBtn').click(function() {
    slider.trigger('next.owl.carousel');
	});
	$('.slider_PrevBtn').click(function() {
	    slider.trigger('prev.owl.carousel');
	});

	// SERVICE HOVER
	$('.service_cont').hover(function() {
		$(this).children('.service_over').addClass('service_over--active');
		$(this).children('img').addClass('active-img');
	},function() {
		$(this).children('.service_over').removeClass('service_over--active');
		$(this).children('img').removeClass('active-img');
	});

	// SALE HOVER
	$('.sale_cont').hover(function() {
		$(this).children('img').addClass('active-img');
	},function() {
		$(this).children('img').removeClass('active-img');
	});

	// FOTORAMA JOB
	var fotoJob = $('.fotorama');
	fotoJob.fotorama({
		width:'100%',
		ratio: 16/9,
		fit: 'cover',
		transition: 'crossfade',
		nav: 'thumbs',
		loop: true,
		thumbheight: 120,
		thumbwidth: 170,
	});

	// INSTA CAROUSEL
	var instaCarousel = $('#insta-carousel');
	instaCarousel.owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		dotsContainer:'.slider_dots',
		responsive : {
		    720 : {
		        items:2
		    },
		    992 : {
		       items:3
		    },
		    1200 : {
		       items:4
		    },
		    1400 : {
		       items:5
		    }
		}
	});
	$('.insta_NextBtn').click(function() {
   		instaCarousel.trigger('next.owl.carousel');
	});
	$('.insta_PrevBtn').click(function() {
	    instaCarousel.trigger('prev.owl.carousel');
	});

	// MENU FOOTER
	var lastId,
	    topMenu = $("#menu-footer"),
	    topMenuHeight = topMenu.outerHeight()+0,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
});