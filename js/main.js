
/*global $, jQuery, alert*/
$(document).ready(function () {

	'use strict';

	// ========================================================================= //
	//  //SMOOTH SCROLL
	// ========================================================================= //


	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
			if ($(window).width() < 768) {
				$('.nav-menu').slideUp();
			}
		});

		$(this).addClass('active');

		var target = this.hash,
			menu = target;

		target = $(target);
		$('html, body').stop().animate({
			'scrollTop': target.offset().top - 70
		}, 500, 'swing', function () {
			window.location.hash = target.selector;
			$(document).on("scroll", onScroll);
		});
	});


	function onScroll(event) {
		if ($('.home').length) {
			var scrollPos = $(document).scrollTop();
			$('nav ul li a .smoothScroll').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
			});
		}
	}

	// ========================================================================= //
	//  //NAVBAR SHOW - HIDE
	// ========================================================================= //


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 200) {
			$("#main-nav, #main-nav-subpage").slideDown(700);
			$("#main-nav-subpage").removeClass('subpage-nav');
		} else {
			$("#main-nav").slideUp(700);
			$("#main-nav-subpage").hide();
			$("#main-nav-subpage").addClass('subpage-nav');
		}
	});

	// ========================================================================= //
	//  // RESPONSIVE MENU
	// ========================================================================= //

	$('.responsive').on('click', function (e) {
		$('.nav-menu').slideToggle();
	});

	// ========================================================================= //
	//  Typed Js
	// ========================================================================= //

	var typed = $(".typed");

	$(function () {
		typed.typed({
			strings: ["Technology.", "Computer Science.", "Machine Learning.",
				"Software Engineering.", "Understanding intelligence.",
				"Understanding the universe.", "Civic Engagement.", "Life.", "Art.", "Music.",
				"Mathematics.", "Science.", "Physics.", "Learning.", "And the future."],
			typeSpeed: 100,
			loop: true,
		});
	});


	// ========================================================================= //
	//  Owl Carousel Facts
	// ========================================================================= //


	$('.facts-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		autoplaySpeed: 2000,
		autoplayTimeout: 8000,
		margin: 20,
		dots: true,
		nav: true,
		responsiveClass: true,
		responsive: { 0: { items: 1 }, 768: { items: 3 }, 900: { items: 5 } }
	});

	$('.skills-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		autoplaySpeed: 2000,
		autoplayTimeout: 7000,
		margin: 20,
		dots: false,
		nav: true,
		responsiveClass: true,
		responsive: { 0: { items: 1 }, 768: { items: 3 }, 900: { items: 5 } }
	});


	// ========================================================================= //
	//  Porfolio isotope and filter, Masonry
	// ========================================================================= //

	var msnry = new Masonry('.portfolio-container', {
		itemSelector: '.portfolio-thumbnail'
	});

	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-thumbnail',
		columnWidth: '#model-folio'
	});

	$('#portfolio-flters li').on('click', function () {
		$("#portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});


	// ========================================================================= //
	//  PhotoSwipe
	// ========================================================================= //

	var items = [],
		$pswp = $('.pswp')[0],
		$folioItems = $('.item-folio');

	// get items
	$folioItems.each(function (i) {

		var $folio = $(this),
			$thumbLink = $folio.find('.thumb-link'),
			$title = $folio.find('.item-folio__title'),
			$caption = $folio.find('.item-folio__caption'),
			$titleText = '<h4>' + $.trim($title.html()) + '</h4>',
			$captionText = $.trim($caption.html()),
			$href = $thumbLink.attr('href'),
			$size = $thumbLink.data('size').split('x'),
			$width = $size[0],
			$height = $size[1];

		var item = {
			src: $href,
			w: $width,
			h: $height
		}

		if ($caption.length > 0) {
			item.title = $.trim($titleText + $captionText);
		}

		items.push(item);
	});

	// bind click event
	$folioItems.each(function (i) {

		$(this).on('click', function (e) {

			if ($(e.target).parents('.item-folio__project-link').length > 0 || $(e.target).is($(this).find('.item-folio__project-link'))) {
			} else {
				e.preventDefault();
				var options = {
					index: i,
					showHideOpacity: true
				}

				// initialize PhotoSwipe
				var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
				lightBox.init();
			}
		});

	});

});

  // ========================================================================= //
  //  Extra
  // ========================================================================= //

