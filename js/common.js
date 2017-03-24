var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight,
	mobile = false,
	desktop = true,
	opera12 = false,
	apple = false,
	loaded = false,
	ie = 0,
	
	scrolltop = 0;



function isMobile() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

function isTablet() {
	 return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}

function isApple() {
	return (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
}

function isAndroid() {
	return (/android/i.test(navigator.userAgent.toLowerCase()));
}

function isOpera12() {
	if(navigator.userAgent.indexOf('Opera') !== -1 && navigator.userAgent.indexOf('OPR/') === -1) {
		var version = navigator.userAgent.substring(navigator.userAgent.indexOf('Version/') + 8);
		if(version.indexOf('12.') !== false) return true;
		return false;
	}
	return false;
}

function isIE() {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}



mobile  = isMobile();
tablet  = isTablet();
desktop = (isMobile() || isTablet()) ? false: true;
apple   = isApple();
opera12 = isOpera12();
ie      = isIE();

windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
windowHeight = window.innerHeight ? window.innerHeight : $(window).height();

if (desktop === false) {
	$('body').removeClass('desktop');
	$('body').addClass('device');
}

if (opera12 === true) {
	$('body').addClass('opera12');
}

if (isAndroid()) {
	$('body').addClass('android');
}

if (apple === true) {
	$('body').addClass('apple');
}

if (desktop === true) {
	$('body').addClass('desktop');
}

if (tablet === true && mobile === false) {
	$('body').addClass('tablet');
}

if (mobile === true) {
	$('body').addClass('mobile');
}

$(window).scroll(function() {
	scrolltop = $(window).scrollTop();
});

function resizeHandler() {
	windowWidth = (document.documentElement.clientWidth) ? document.documentElement.clientWidth : $(window).width();
	windowHeight = (document.documentElement.clientHeight) ? document.documentElement.clientHeight : $(window).height();
}

$(window).resize(function() {
	resizeHandler();
});


if (desktop === false) {
	window.addEventListener("orientationchange", function() {
		resizeHandler();
	});
}

$(document).ready(function() {

	if ($('.js-l-pub').length > 0) {
		pubLayout();
	}

	if ($('.l-infoblock').length > 0) {
		infoLayout();
	}

	if ($('.sitemap__list').length > 0) {
		siteMapLayout();
	}

	$('.logo').addClass('svg-logo--open');

	if ($('.input').length > 0) {
		inputEffect();
	}

	asideShareLinks();

	if ($('.js-years-list').length > 0) {
		yearsList();
	}

	if ($('.flatpickr').length > 0) {
		datePicker();
	}

});


if ($('.l-service').length > 0) {
	(function(){

		var visible = false;

		$('.service__expand').on('click', function(event) {
			event.preventDefault();

			if (visible === false) {
				$('.service-hidden').css({
					'display': '',
					opacity: '1'
				});
				visible = true;

			} else {

				$('.service-hidden').css({
					'display': 'none',
					opacity: '0'
				});
				visible = false;

			}

			$(this).toggleClass('service__expand--true');
		});
	}());
}


var $pubGrid;

var pubLayout = function() {

	var $pub = $('.js-l-pub'),
		$pubHead = $('.tabs__header', $pub);

		$pubGrid = $('.tab__content', $pub);

	$pubGrid.isotope({
		itemSelector: '.pub-item',
		// transitionDuration: 200,
		// stagger: 30,
		transitionDuration: 0,
		stagger: 0,
		masonry: {
			gutter: 40
		}
	});

	if ($('.js-pub-tabs', $pub).length > 0) {
		var $tab  = $('.js-pub-tabs', $pub).find('li').eq(0),
			$type = $tab.children('a').attr('href');

		$tab.addClass('active');

		$pubHead.find('.link-all').hide();
		$pubHead.find($type).show();

		$pubGrid.isotope({filter: $type});


	}

	$('.js-pub-tabs').on('click', 'a', function(event) {
		event.preventDefault();
		var el  = $(this),
			num = el.attr('href');

		el.parent().addClass('active').siblings().removeClass('active');
		$pubGrid.isotope({filter: num});

		$pubHead.find('.link-all').hide();
		$pubHead.find(num).show();
	});

	$('.js-news-loadmore').on('click', function(event) {
		event.preventDefault();

		$.ajax({
			url: 'ajax-pub-data.html',
			type: 'get',
		})
		.success(function(result) {
			var _data = $(result);
			$pubGrid.isotope('insert', _data);
		})
		.fail(function() {
			console.error("error");
		});
	});

	$(window).on("debouncedresize", function( event ) {
		setTimeout(function(){$pubGrid.isotope('layout');}, 500);
	});

	$pubGrid.imagesLoaded(function() {
		console.log('pubGrid imagesLoaded');
		$pubGrid.isotope('layout');
	});

};



var infoLayout = function() {

	//универсализировать

	var $stage1 = $('.js-infoblock-1 .tab__content');
	var $tabs1  = $('.js-tabs-1');

	$stage1.isotope({
		itemSelector: '.tab-item',
		transitionDuration: 200,
		stagger: 30,
		masonry: {
			gutter: 40
		}
	});

	$tabs1.on('click', 'a', function(event) {
		event.preventDefault();
		var el  = $(this),
			num = el.attr('href');

		el.parent().addClass('active').siblings().removeClass('active');
		$stage1.isotope({filter: num});
	});

	$tabs1.find('li').eq(0).find('a').click();



	var $stage2 = $('.js-infoblock-2 .tab__content');
	var $tabs2  = $('.js-tabs-2');

	$stage2.isotope({
		itemSelector: '.tab-item',
		transitionDuration: 200,
		stagger: 30,
		masonry: {
			gutter: 40
		}
	});

	$tabs2.on('click', 'a', function(event) {
		event.preventDefault();
		var el  = $(this),
			num = el.attr('href');

		el.parent().addClass('active').siblings().removeClass('active');
		$stage2.isotope({filter: num});
	});

	$tabs2.find('li').eq(0).find('a').click();



	$(window).on("debouncedresize", function( event ) {
		setTimeout(function(){
			$stage1.isotope('layout');
			$stage2.isotope('layout');
		}, 500);
	});




};



var siteMapLayout = function() {

	var $grid = $('.sitemap__list');

	$grid.isotope({
		itemSelector: '.sitemap__block',
		transitionDuration: 0,
		masonry: {
			gutter: 40,
			columnWidth: '.sitemap__block--sizer'
		}
	});

	var container = $('.js-sitemap');

	TweenMax.set(container, {
		x: '-100%',
		opacity: 0
	});

	$('.js-sitemap-show').on('click', function(event) {
		event.preventDefault();
		TweenMax.set(container, {
			x: '0%',
			onComplete: function() {
				TweenMax.to(container, 0.25, {
					opacity: 1,
					onComplete: function() {
						$('body').addClass('scrollbar-is-hidden');
						$grid.isotope('reloadItems');
					}
				});
			}
		});
	});

	$('.js-sitemap-hide').on('click', function(event) {
		event.preventDefault();
		
		TweenMax.to(container, 0.25, {
			opacity: 0,
			onComplete: function() {
				TweenMax.set(container, {
					x: '-100%',
					onComplete: function() {
						$('body').removeClass('scrollbar-is-hidden');
					}
				});
			}
		});
	});
};


if ($('.promo__slider').length > 0) {

	$('.promo__slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoHeight: true,
		lazyLoad: true,
		stageElement: 'ul',
		itemElement: 'li'
	});

}


if ($('.p-list').length > 0) {

	$('.p-list .owl-carousel').owlCarousel({
		items: 5,
		slideBy: 5,
		nav: true,
		navText: [
		'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" fill="#000" fill-rule="evenodd"/></svg>',
		'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#000" fill-rule="evenodd"/></svg>'
		],
		responsive: {
			0: {
				items: 1,
				slideBy: 1
			},
			540: {
				items: 2,
				slideBy: 2
			},
			767: {
				items: 3,
				slideBy: 3
			},
			1024: {
				items: 4,
				slideBy: 4
			},
			1280: {
				items: 5,
				slideBy: 5
			},
		}
	});

}


if ($('.b-calend').length > 0) {

	var $c_head = $('.calend__header .owl-carousel'),
		$c_text = $('.calend__content');

	$c_head.owlCarousel({
		itemElement: 'div',
		items: 1,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		navText: [
		'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" fill="#000" fill-rule="evenodd"/></svg>',
		'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#000" fill-rule="evenodd"/></svg>'
		]
	});

	$c_text.owlCarousel({
		items: 1,
		nav: false,
		margin:20,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		autoHeight:true
	});

	$('.calend__header .owl-next').on('click', function(event) {
		$c_text.trigger('next.owl.carousel');
	});

	$('.calend__header .owl-prev').on('click', function(event) {
		$c_text.trigger('prev.owl.carousel');
	});

}






if ($('.slider-extra').length > 0) {

	(function(){

		var $extra = $('.slider-extra');

		$extra.owlCarousel({
			items: 3,
			slideBy: 3,
			nav: true,
			mouseDrag: true,
			touchDrag: true,
			pullDrag:  true,
			navContainer:  '.box__footer--nav',
			dotsContainer: '.box__footer--dots',
			navText: [
				'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" fill="#000" fill-rule="evenodd"/></svg>',
				'<svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#000" fill-rule="evenodd"/></svg>'
			],
			responsive: {
				320: {
					items: 1,
					slideBy: 1
				},
				767: {
					items: 2,
					slideBy: 2
				},
				991: {
					items: 3,
					slideBy: 3
				}
			}
		});

		$('.slider-extra--next').on('click', function(event) {
			$extra.trigger('next.owl.carousel');
		});

		$('.slider-extra--prev').on('click', function(event) {
			$extra.trigger('prev.owl.carousel');
		});

	}());

	

}


if ($('.l-faq').length > 0) {
	(function(){

		var el;

		$('.faq-q').on('click', function(event) {
			event.preventDefault();
			el = $(this);
			// el.toggleClass('active');
			el.next().slideToggle(200);
		});

	}());
}

$('.popup').on('click', function(event) {
	event.stopPropagation();
});

$('.js-popup-show').on('click', function(event) {
	event.preventDefault();
	var _this  = $(this),
		_url   = _this.attr('href'),
		_width = _this.data('width');

	Popup.open(_url, _width);
});

$('.js-popup-hide').on('click', function(event) {
	event.preventDefault();
	Popup.hide();
});


var Popup = {

	open: function(url, width) {

		popupTemplate(url);

		$('.js-popup').fadeIn(100);

		$('body').addClass('popup-is-visible');

		popupEvents();

		if (width !== undefined) {
			$('.popup').css('max-width', width);
		}

	},

	hide: function() {

		$('.js-popup').fadeOut(100, function(){
			$('.js-popup-content').html('');
			$('.js-popup .popup-tabs').remove();
			$('.js-popup .popup-title').remove();
			$('.popup').removeAttr('style');
		});

		$('body').removeClass('popup-is-visible');
	}
};

var popupTemplate = function (name) {

	if (name.length > 0) {
		$(name).tmpl().appendTo('.js-popup-content');
	} else {
		console.log('Не указано имя попап-шаблона на ссылке');
	}

	if ($('.js-popup-content .popup-title').length > 0) {
		var popUpTitle = $('.js-popup-content .popup-title');
		popUpTitle.remove();
		popUpTitle.appendTo('.popup-header');
	}

};

var popupEvents = function() {

	inputEffect();

	if ($('.js-login-form').length > 0) {

		var $loginForm = $('.js-login-form');

		$loginForm.parsley({
			minlength: 1,
			trigger: 'keypress',
			errorClass: 'input__error',
			successClass: 'input__success',
			errorsWrapper: '<span class="input__note note__error color--red"></span>',
			errorTemplate: '<span></span>'
		});

		Parsley.setLocale('ru');

		$('.js-button-login').on('click', function(event) {
			event.preventDefault();

			if ($loginForm.parsley().validate()) {

				console.log('valid');

				$loginForm.ajaxForm({

					//data: {web_form_apply: 'Y'},

					beforeSubmit: function(formData, jqForm, options) {

						console.log('beforeSubmit');

						$loginForm.addClass('form-busy');

						var queryString = $.param(formData);

						console.log(queryString);

						return true; 
					},

					success: function(statusText, responseText) {

						if (statusText === 'false') {

							$loginForm.removeClass('form-busy');

							$('.msg--login-form-error').show();

							return false; 

						}

						window.location.reload();

					}
				});

				$loginForm.submit();

			}
		});

	}
};




if ( $('#map-container').length ) {

	ymaps.ready(init);

	var myMap,
		myCollection,
		myPlacemark;

	myPlacemark = [];

	function init(){
		myMap = new ymaps.Map ("map-container", {
			center: [53.92371562293391,27.512945709636973],
			zoom: 16,
			controls: []
		});
		
		myMap.controls.add('zoomControl', {position: {right: '40px', top: '50px'}});
		myMap.behaviors.disable('scrollZoom');

		myCollection = new ymaps.GeoObjectCollection();
		
		myPlacemark = new ymaps.Placemark([53.92371562293391,27.512945709636973], { hintContent: 'Национальная Библиотека', balloonContent: 'Пр. Независимости' },{
			iconLayout: 'default#image',
			iconImageHref: 'i/map-label.png',
			iconImageSize: [90, 80],
			iconImageOffset: [-26, -80]
		});

		myCollection.add(myPlacemark);
		myMap.geoObjects.add(myCollection);


	}

}




if ($('.sidemenu').length > 0) {

	var el,
		pos = 0,
		submenu = $('.submenu');

	$('.sidemenu li').on('mouseover', function() {

		el = $(this);

		submenu = $('.submenu:visible');

		if (el.position().top > submenu.height()) {
			submenu.css('top', el.position().top - submenu.height() / 2);
		}

	});
}


var Regform = {

	userCheck: function(el) {

		//var result = Math.random() > 0.5 ? true : false;

		return true;
	}

};

if ($('form').length > 0) {

	$('form').parsley({
		trigger: 'keypress',
		errorClass: 'input__error',
		successClass: 'input__success',
		errorsWrapper: '<span class="input__note note__error color--red"></span>',
		errorTemplate: '<span></span>'
	});

	if ($('.form-section').length > 0) {
		$(function () {
			var $sections = $('.form-section');

			function navigateTo(index) {
				$sections.removeClass('current').slideUp('300');
				$sections.eq(index).addClass('current').slideDown('300');

				$('.form-navigation .js-reg-prev').toggle(index > 0);

				var atTheEnd = index >= $sections.length - 1;

				$('.form-navigation .js-reg-next').toggle(!atTheEnd);

				$('.form-navigation .js-reg-submit').toggle(atTheEnd);

				$('.js-reg-steps').find('.step').removeClass('step--current').eq(index).addClass('step--current');
			}

			function curIndex() {
				return $sections.index($sections.filter('.current'));
			}

			$('.form-navigation .js-reg-prev').on('click', function(event) {
				event.preventDefault();
				navigateTo(curIndex() - 1);
			});

			$('.form-navigation .js-reg-next').on('click', function(event) {
				event.preventDefault();
				if ($('.js-reg-form').parsley().validate({group: 'block-' + curIndex()}))
					navigateTo(curIndex() + 1);
			});

			$.each($sections, function(index, section) {
				$(section).find(':input').attr('data-parsley-group', 'block-' + index);
			});

			navigateTo(0);

			$('.form-navigation').show();

			Parsley.addValidator('usernameFree', {
				requirementType: 'boolean',
				validateString: function() {
					return Regform.userCheck();
				},
				messages: {
					ru: 'Логин занят'
				}
			});
		});
	}

	if ($('.input-date').length > 0) {
		var cleave = new Cleave('.input-date', {
			delimiter: '.',
			date: true,
			datePattern: ['d', 'm', 'Y']
		});
	}

	if ($('.select').length) {
		$('.select select').selectize({
			onInitialize: function() {

				var check = $(this)[0].$input[0].firstChild.value;

				if (check !== '') {
					$(this)[0].$wrapper.addClass('has-content');
				}
			},
			onChange: function() {
				$(this)[0].$wrapper.addClass('has-content');
			}
		});
	}
}



var inputEffect = function() {
	$.each($(".input input, .input textarea"), function(index, val) {
		if($(this).val().length !== 0){
			$(this).addClass("has-content");
		}
	});

	$(".input input, .input textarea").off('focusout');

	$(".input input, .input textarea").on('focusout', function(){
		if($(this).val().length !== 0){
			$(this).addClass("has-content");
		}else{
			$(this).removeClass("has-content");
		}
	});
};


if (mobile === false && $('.article-aside-wrap').length > 0) {

	$.each($('.article-aside-wrap'), function(index, val) {
		$(this).stick_in_parent({
			offset_top: 100
		});
	});


}


function socialWindow(url) {
	var left = (screen.width - 570) / 2;
	var top = (screen.height - 570) / 2;
	var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
	window.open(url,"NewWindow",params);
}

function asideShareLinks() {
	var pageUrl = encodeURIComponent(document.URL);
	var title = encodeURIComponent(jQuery("meta[property='og:title']").attr("content"));
	var description = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
	var image = encodeURIComponent(jQuery("meta[property='og:image']").attr("content"));
	
	jQuery(".share-fb").on("click", function() {
		url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
		socialWindow(url);
	});

	jQuery(".share-vk").on("click", function() {
		url = "http://vkontakte.ru/share.php?url=" + pageUrl + "title=" + title + "&description=" + description + "image=" + image;
		socialWindow(url);
	});

	jQuery(".share-tw").on("click", function() {
		url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + description;
		socialWindow(url);
	});
}


Parsley.addMessages('ru', {
	defaultMessage: "Некорректное значение.",
	type: {
		email:        "Введите адрес электронной почты.",
		url:          "Введите URL адрес.",
		number:       "Введите число.",
		integer:      "Введите целое число.",
		digits:       "Введите только цифры.",
		alphanum:     "Введите буквенно-цифровое значение."
	},
	notblank:       "Заполните поле.",
	required:       "Обязательное поле.",
	pattern:        "Это значение некорректно.",
	min:            "Это значение должно быть не менее чем %s.",
	max:            "Это значение должно быть не более чем %s.",
	range:          "Это значение должно быть от %s до %s.",
	minlength:      "Это значение должно содержать не менее %s символов.",
	maxlength:      "Это значение должно содержать не более %s символов.",
	length:         "Это значение должно содержать от %s до %s символов.",
	mincheck:       "Выберите не менее %s значений.",
	maxcheck:       "Выберите не более %s значений.",
	check:          "Выберите от %s до %s значений.",
	equalto:        "Это значение должно совпадать.",
	dateiso:  "Это значение должно быть корректной датой (ГГГГ-ММ-ДД).",
	minwords: "Это значение должно содержать не менее %s слов.",
	maxwords: "Это значение должно содержать не более %s слов.",
	words:    "Это значение должно содержать от %s до %s слов.",
	gt:       "Это значение должно быть больше.",
	gte:      "Это значение должно быть больше или равно.",
	lt:       "Это значение должно быть меньше.",
	lte:      "Это значение должно быть меньше или равно.",
	notequalto: "Это значение должно отличаться."
});

Parsley.setLocale('ru');



yearsList = function() {

	var el = $('.js-years-list');

	var cur = $('.years-list__current', el).index();

	if (cur == 0) {
		cur = 0;
	} else {
		cur = cur - 1;
	}

	$('.js-years-list').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 200,
		initialSlide: cur,
		prevArrow: '<div class="years-list__item years-list__prev"><a href="#"><span class="icon-angle-left"></span></a></div>',
		nextArrow: '<div class="years-list__item years-list__next"><a href="#"><span class="icon-angle-right"></span></a></div>'
	});

};



/**
 *
 * @param p
 * @param p.root all news container
 * @param p.newsBlock one page news container. set empty if it similar root
 * @param p.newsLoader object container click to be processed
 * @param p.ajaxLoader block which will be shown while loading
 * @param p.url default set it bitrix SEF_FOLDER
 * @param p.navResult.endPage total pages count
 * @param p.navResult.navNum bitrix navigation number
 * @constructor
 */
function AjaxPagination(p){
	var o = this;
	this.root = $(p.root);
	this.newsBlockSelector = ( $(p.newsBlock).length ? p.newsBlock : p.root );
	this.newsBlock = $( o.newsBlockSelector );
	this.newsLoader = $(p.newsLoader);
	// this.ajaxLoader = $(p.ajaxLoader);
	this.curPage = 1;
	this.url = p.url;
	this.navResult = (p.navResult);

	this.loadMoreNews = function(){
		var loadUrl = o.url;
        loadUrl += ( loadUrl.split('?')[1] ? '&' : '?' );
		loadUrl  += "PAGEN_"+ o.navResult.navNum + "=" + (++o.curPage);

		// o.ajaxLoader.show();
		o.newsLoader.addClass('loading');

		$.ajax({
			url: loadUrl,
			type: "POST",
			data:{
				AJAX: "Y"
			}
		}).done(function(html){
			var news = $(html).find(o.newsBlockSelector).html();
			$pubGrid.isotope('insert', $(news));
			$pubGrid.isotope('layout');
			$pubGrid.imagesLoaded(function() {
				$pubGrid.isotope('layout');
			});
			//o.newsBlock.last().append(news);

			//news.ajaxLoader.hide(o.newsBlock);
			o.newsLoader.removeClass('loading');

			if(o.curPage == o.navResult.endPage){
				o.newsLoader.hide();
			}
		});
	};

	this.init = function() {
		o.newsLoader.on('click', function(event){
			o.loadMoreNews();
			event.preventDefault();
		});
	};
}



function datePicker() {
	$('.flatpickr').flatpickr({
		"locale": "ru",
		altInput: true,
		altFormat: 'd.m.Y',
		onValueUpdate: function() {
			$('.flatpickr.active').addClass('has-content');
		}
	});

	$('.flatpickr-wrap').flatpickr({
		"locale": "ru",
		wrap: true,
		onValueUpdate: function() {
			$('.flatpickr.active').addClass('has-content');
		}
	});
}

$(function () {
	/*years slider*/
	var $slidersYears = $('.years-slider-js');
	if ($slidersYears.length) {
		$slidersYears.each(function () {
			var $thisSlider = $(this);
			var $wrap = $thisSlider.parent();
			var $thisBtnNext = $('.swiper-button-next', $wrap);
			var $thisBtnPrev = $('.swiper-button-prev', $wrap);

			new Swiper($thisSlider, {
				loop: false,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				keyboardControl: false,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev
			});
		});
	}
});

$(function () {
	/*select row date by one*/
	var $group = $('.step-group-js');
	var $row = $('.search__row', $group);
	var $check = $(':radio', $group);
	var noActiveClass = 'no-active';

	if ($group.length) {
		$.each($check, function () {
			var $currentCheck = $(this);

			$currentCheck.on('change', function () {
				var $thisCheck = $(this);

				$row.addClass(noActiveClass);
				$thisCheck.closest($row).removeClass(noActiveClass);
			})
		});
	}
});

// $('.js-readmore').readmore({
// 	speed: 75,
// 	collapsedHeight: 175,
// 	blockCSS: '',
// 	moreLink: '<a href="#" class="expand-link dotted">Показать больше</a>',
// 	lessLink: '<a href="#" class="expand-link dotted">Свернуть</a>'
// });

$(function () {
	var navArrowByCircle = [
		'<div class="slider-button-circle"><svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" fill="#000" fill-rule="evenodd"/></svg><span>Назад</span></div>',
		'<div class="slider-button-circle"><svg class="owl-svg" enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#000" fill-rule="evenodd"/></svg><span>Вперед</span></div>'
	];

	function rowSlidersInit() {
		var $rowSliderContainer = $('.row-slider-container-js');
		if ($rowSliderContainer.length > 0) {

			$.each($rowSliderContainer, function () {
				var $thisSliderContainer = $(this);
				var $thisSlider = $('.owl-carousel', $thisSliderContainer);
				var $navContainer = $('.outside-nav-slider-js', $thisSliderContainer);
				var timeout;

				function setSameHeight() {
					var options = {
						byRow: true,
						property: 'height',
						target: null,
						remove: false
					};

					$('.owl-item', $thisSlider).matchHeight(options);
				}

				$thisSlider.on('initialized.owl.carousel', function () {
					setSameHeight();

					var $lightGallery = $('.lg-row-slider-js');
					var $lightGalleryVideo = $('.lg-video-row-slider-js');

					if ($lightGallery.length) {
						$.each($lightGallery, function () {
							var $thisGallery = $(this);
							lightGalleryImages($thisGallery);
						})
					}

					if ($lightGalleryVideo.length) {
						$.each($lightGalleryVideo, function () {
							var $thisGallery = $(this);
							lightGalleryVideos($thisGallery);
						})
					}
				});

				$thisSlider.owlCarousel({
					items: 3,
					slideBy: 3,
					nav: true,
					margin: 30,
					navContainer: $navContainer,
					navText: navArrowByCircle,
					responsive: {
						0: {
							items: 1,
							slideBy: 1
						},
						300: {
							items: 1,
							slideBy: 1
						},
						500: {
							items: 2,
							slideBy: 2
						},
						992: {
							items: 3,
							slideBy: 3
						}
					}
				}).on('resized.owl.carousel', function () {
					clearTimeout(timeout);

					timeout = setTimeout(function () {
						setSameHeight();
					}, 100);
				});
			})

		}
	}

	rowSlidersInit();

	function booksSlidersInit() {
		var $booksSliderContainer = $('.books-slider-container-js');
		if ($booksSliderContainer.length > 0) {

			$.each($booksSliderContainer, function () {
				var $thisSliderContainer = $(this);
				var $thisSlider = $('.owl-carousel', $thisSliderContainer);
				var $navContainer = $('.outside-nav-slider-js', $thisSliderContainer);

				$thisSlider.owlCarousel({
					items: 5,
					slideBy: 5,
					nav: true,
					margin: 30,
					navContainer: $navContainer,
					navText: navArrowByCircle,
					responsive: {
						0: {
							items: 1,
							slideBy: 1
						},
						380: {
							items: 2,
							slideBy: 2
						},
						480: {
							items: 2,
							slideBy: 2
						},
						640: {
							items: 3,
							slideBy: 3
						},
						992: {
							items: 4,
							slideBy: 4
						},
						1100: {
							items: 5,
							slideBy: 5
						}
					}
				});
			})

		}
	}

	booksSlidersInit();

	function singleSlidersInit() {
		var $rowSliderContainer = $('.single-slider-container-js');
		if ($rowSliderContainer.length > 0) {

			$.each($rowSliderContainer, function () {
				var $thisSliderContainer = $(this);
				var $thisSlider = $('.owl-carousel', $thisSliderContainer);
				var $navContainer = $('.outside-nav-slider-js', $thisSliderContainer);

				$thisSlider.owlCarousel({
					items: 1,
					slideBy: 1,
					nav: true,
					margin: 0,
					navContainer: $navContainer,
					navText: navArrowByCircle
				});
			})

		}
	}

	singleSlidersInit();

	function createMediaEq() {
		var $eqContainer = $('.eq-js');
		var eqLength = 50;
		var minSize = 0;
		var maxSize = 50;
		var eqColWidth = 100/eqLength +'%';

		$.each($eqContainer, function () {
			var $thisContainer = $(this);

			for(var i = 0; i < eqLength; i++) {
				var eqColHeight = getRandomInt(minSize,maxSize);
				$('<span class="eq-col"></span>').appendTo($thisContainer).css({
					'height': eqColHeight,
					'width': eqColWidth
				});
			}
		});

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}

	createMediaEq();

	function tapeGalleryInit() {
		var $tapeGalleryContainer = $('.tape-gallery-container-js');
		if ($tapeGalleryContainer.length) {
			$tapeGalleryContainer.each(function () {
				var $thisContainer = $(this);
				var $thisSlider = $('.swiper-container', $thisContainer);
				var $thisBtnNext = $('.swiper-button-next', $thisContainer);
				var $thisBtnPrev = $('.swiper-button-prev', $thisContainer);

				new Swiper($thisSlider, {
					loop: false,
					slidesPerView: 'auto',
					watchSlidesVisibility: true,
					keyboardControl: false,

					nextButton: $thisBtnNext,
					prevButton: $thisBtnPrev
				});
			});
		}
	}

	tapeGalleryInit();

	function lightGalleryInit() {
		var $lightGallery = $('.lg-js');
		var $lightGalleryVideo = $('.lg-video-js');

		if ($lightGallery.length) {
			$.each($lightGallery, function () {
				var $thisGallery = $(this);
				lightGalleryImages($thisGallery);
			})
		}

		if ($lightGalleryVideo.length) {
			$.each($lightGallery, function () {
				var $thisGallery = $(this);
				lightGalleryVideos($thisGallery);
			})
		}
	}

	lightGalleryInit();

	function lightGalleryImages($thisGallery) {
		$thisGallery.lightGallery({
			thumbnail: true,
			animateThumb: true,
			showThumbByDefault: false,
			download: false
		});
	}

	function lightGalleryVideos($thisGallery) {
		$thisGallery.lightGallery({
			thumbnail: true,
			animateThumb: true,
			showThumbByDefault: false,
			download: false,
			autoplayControls: false,
			zoom: false
		});
	}
});