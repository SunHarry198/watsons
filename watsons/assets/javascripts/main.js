$(document).ready(function() {


	$('.click_show_menu_km').click(function(event) {
		$('.header_mobile_title_1').addClass('active');
		$('.close_header_mobile_title').addClass('active');
	});

	$('.item_menu_header_mobile').click(function(event) {
		$('.item_menu_header_mobile').addClass('active');
		$('.close_header_mobile_title').addClass('active');
	});

	$('.click_show_menu_sp').click(function(event) {
		$('.header_mobile_sp').addClass('active');
		$('.close_header_mobile_title').addClass('active');
	});

	$('.click_show_menu_them').click(function(event) {
		$('.header_mobile_title_them').addClass('active');
		$('.close_header_mobile_title').addClass('active');
	});

	$('.close_header_mobile_title').click(function(event) {
		$('.header_mobile_title_1').removeClass('active');
		$('.header_mobile_sp').removeClass('active');
		$('.header_mobile_title_them').removeClass('active');
		$('.item_menu_header_mobile').removeClass('active');
		$('.close_header_mobile_title').removeClass('active');
	});



	$('.home_slide_header > div').slick({
        dots: true,
        prevArrow: $('.next_prev_home_slide_header > article:nth-child(1)'),
        nextArrow: $('.next_prev_home_slide_header > article:nth-child(2)'),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


	$('.is__slide_page_news > div').slick({
        dots: true,
        prevArrow: $('.prev_slide_page_news'),
        nextArrow: $('.next_slide_page_news'),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

	$('.home_slide_header_2 > div').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: $('#prev_slide'),
        nextArrow: $('#next_slide'),
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true,
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
	      breakpoint: 600,
	      settings: {
	      	dots: true,
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	dots: true,
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    }

	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	    ]
	});

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		// spaceBetween: 10,
		slidesPerView: 6,
		loop: false,
		freeMode: true,
		loopedSlides: 6, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		// spaceBetween: 10,
		loopedSlides: 6, //looped slides should be the same
		loop: true,
		navigation: {
	      	prevEl: '.prev_slide',
	      	nextEl: '.next_slide',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	$('.slide_itemss > div').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: false,
		dots: true,
		prevArrow: $('.slide_itemss .prev_slide_2'),
		nextArrow: $('.slide_itemss .next_slide_2'),
		responsive: [
	    {
			breakpoint: 1024,
			settings: {
	        arrows: false,
	        centerMode: false,
	        infinite: false,
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
			breakpoint: 480,
			settings: {
	        arrows: false,
	        centerMode: false,
	        infinite: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
	});

	$('.slide_itemss_2 > div').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: false,
		dots: true,
		prevArrow: $('.slide_itemss_2 .prev_slide_2'),
		nextArrow: $('.slide_itemss_2 .next_slide_2'),
		responsive: [
	    {
			breakpoint: 1024,
			settings: {
	        arrows: false,
	        centerMode: false,
	        infinite: false,
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
			breakpoint: 480,
			settings: {
	        arrows: false,
	        centerMode: false,
	        infinite: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
	});


	$('.menu_dropdow_mb').click(function(e) {
		$('.menu_dropdow_mb').removeClass('active_mobile');
		$(this).addClass('active_mobile');
		$('.back_menu_mobile').addClass('active_mobile');
	});
	$('.back_menu_mobile').click(function(e) {
		$('.menu_dropdow_mb').removeClass('active_mobile');
		$(this).removeClass('active_mobile');
	});
	
	$('.click_show_address_item').click(function(event) {
		$('.address_item').toggleClass( "show" );
	});





	const filter_product_home = $('.filter_product_home > div').toArray();
	const content_product_tab = $('.content_product_tab').toArray();
	var id_filter = "";
	for (let i = 0; i < filter_product_home.length; i++) {
		$(filter_product_home[i]).click(function(event) {
			$('.filter_product_home > div').removeClass('active');
			id_filter = $(this).attr('data-fiter');
			$(this).addClass('active');
			$('.content_product_tab').addClass('hidden');
			$('#' + id_filter).removeClass('hidden');
		});
	}
	




	$('html').on('DOMMouseScroll mousewheel', function (e) {
		if($('html,body').scrollTop() > 40){
			$('.header_1').addClass('hidden_header_1');
			$('#goTop').fadeIn(); 
		}else{
			$('.header_1').removeClass('hidden_header_1');
			$('#goTop').fadeOut(); 
		}
		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
		    //scroll down
		    $( ".flex_header" ).addClass( "hidden_header" );
		    $('.search_header').addClass( "hidden_header" );
		} else {
		    //scroll up
		    $( ".flex_header" ).removeClass( "hidden_header" );
		    $('.search_header').removeClass( "hidden_header" );
		}
	});

	$('#goTop').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		$('.header_1').removeClass('hidden_header_1');
		$( ".flex_header" ).removeClass( "hidden_header" );
	    $('.search_header').removeClass( "hidden_header" );
		return false; 
	});

	var quantityValue = $("#quantity_value").val();

	$(".quantity_btn_1").click(function(){
		if(quantityValue > 1){
			quantityValue--;
			$("#quantity_value").val(quantityValue);
		}
	});


	$(".quantity_btn_2").click(function(){
		quantityValue++;
		$("#quantity_value").val(quantityValue);
	});


});
