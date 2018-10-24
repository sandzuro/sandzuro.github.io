//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ./nav.js
//=require ./language.js

$(function () {
  'use strict';

  // HOVER FOR DEPARTMENT TITLE
  $('.departmentTitle').click( function () {
   if ($(this).parent().hasClass('active')) {
    		// если нажимаем по тому же департаменту скрываем список
    		$(this).parent().find('.departnmentVacancies').delay(20).slideToggle();
    		$(this).parent().removeClass('active');
    		$(this).parent().find('span').css('transform', 'translate(0%, 0%) rotate(0deg');
    		$('.vacancy.toShow').removeClass('toShow');
    		$('.departmentPosition.deactivePos').removeClass('deactivePos');
    		$('.activePos').removeClass('activePos');
    	} else {
    		// если нажимаем по другому департаменту, раскрываем его список
    		$('.department.active').find('.departnmentVacancies').delay(20).slideToggle();
    		$('.department.active').find('span').css('transform', 'translate(0%, 0%) rotate(0deg');
    		// и сворачиваем раскрытый список
    		$('.department.active').removeClass('active');

    		// и закрываем активную вакансию
        $(".toShow").removeClass("toShow");

    		// делаем позиции снова неактивными
    		$('.activePos').removeClass('activePos');

    		// возвращаем все позиции в нормальный вид дадаasdf
    		$('.departmentPosition.deactivePos').removeClass('deactivePos');

    		$(this).parent().addClass('active');
    		$(this).parent().find('span').css('transform', 'translate(0%, 0%) rotate(180deg');
        $(this).parent().find('.departnmentVacancies').delay(20).slideToggle();
      }
    });

    // SHOW VACANCY
    $('.departmentPosition').click( function () {
    	if ($(this).hasClass('activePos')) {
    		$('.activePos').removeClass('activePos');
    		$(".toShow").removeClass("toShow");
    		$('.departmentPosition.deactivePos').removeClass('deactivePos');
    	} else {
    		// убираем активное выделение предыдущей вакансии
    		$('.activePos').removeClass('activePos');

    		// делаем все остальные вакансии неактивными
    		$('.departmentPosition').addClass('deactivePos');

    		// на выбранную вакансию навешиваем активный класс
    		$(this).addClass('activePos');
    		var attr = $(this).attr("data-attr");

    		$(".toShow").removeClass("toShow");
    		$(".rightCol").find("[data-attr='" + attr + "']").addClass("toShow");
    		// console.log($(".vacancy").find("[data-attr='" + attr + "']"));
    	}

    	if ($( window ).width() < 767) {
    		console.log($('.toplogo'));
    		if ($('.navShrink').length > 0) {
    			$('.navShrink').addClass('showCross');
    			$('.topLogo').hide();
    		}
    	}

    	$( ".footerWrap" ).hide();
    	$( ".footerWrap" ).fadeIn( "slow" );
    });

	// NAVIGATION

    //MOBILE: CLOSE THE VACANCY
    $('.mobileCross').click( function () {
     if ($('.mobileCross').css('display') === 'block') {
      $(".mobileCross").hide();
      $('.toShow').removeClass('toShow');
      $('.topNav').show();
      $('.activePos').removeClass('activePos');
      $('.departmentPosition.deactivePos').removeClass('deactivePos');
        // $(".showCross").removeClass("showCross");
        // $('.topLogo').show();
      }
    });


    // Hovers for footer and navbar
    $('.navItemCity').click( function () {
      if ($('.navItemCity').hasClass('deactive')) {
        $(this).removeClass('deactive');
        $(this).addClass('active');
        $('.navMenuHoverIcon').css('transform', 'translate(0%, 0%) rotate(180deg');
        $('.menuHidden').delay(100).slideToggle();
        $('.menu').css('height', '273px');
        $('.menuActive').addClass('isOpen');
        $('.navItem.navSearch.navSearchDark').css('opacity', '0');
      } else {
        $(this).removeClass('active');
        $(this).addClass('deactive');
        $('.navMenuHoverIcon').css('transform', 'translate(0%, 0%) rotate(0deg)');
        $('.menuHidden').slideToggle();
        $('.menu').css('height', '39px');
        $('.menuActive').removeClass('isOpen');
        $('.navItem.navSearch.navSearchDark').css('opacity', '1');
      }
    })

  // Filter block Expanding

  $('.filterDesktop').click(function() {
    // $('.dropdownLeft').toggle();
    $('.dropdownMiddleArrow').toggleClass('rotating')

    if ($('.dropdownWindow').css('display') == 'flex') {

    } else {

    }
    $('.dropdownWindow').slideToggle().css('display', 'flex');
  });

  $('#filterClose').click(function() {
    // $('.dropdownLeft').toggle();
    $('.dropdownMiddleArrow').removeClass('rotating')

    $('.dropdownWindow').slideToggle()
  });

  $('.scheduleElement').click(function() {
    $('.dropdownMiddleArrow').removeClass('rotating')
    $('.dropdownWindow').slideToggle()
  });

  // Selection on click in FILTER and Lang/age options

  $('.dropdownElem').click(function() {
    $(this).toggleClass('filter-selected');
  });

  $('.optionElemLang').click(function() {
    $('.optionElemLang').removeClass('optionSelected');
    $(this).addClass('optionSelected');
  });

  $('.optionElemAge').click(function() {
    $('.optionElemAge').removeClass('optionSelected');
    $(this).addClass('optionSelected');
  });

  $('#filterClear').click(function() {
    $('.optionElem').removeClass('optionSelected');
    $('.dropdownElem').removeClass('filter-selected');
  });

  // Mobile filter block Expanding
  $('.filterMobile').click(function() {
    if ($('.dropdownMiddleMobileArrow').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
      $('.dropdownMiddleMobileArrow').css('transform', 'rotate(180deg)');
    } else {
      $('.dropdownMiddleMobileArrow').css('transform', 'rotate(0deg)');
    }
    $('.dropdownMobile-main').slideToggle();
  });
  // Mobile filter rows expanding
  $('.dropdownMobile-title').click(function() {

    $(this).parent().find('.filterSelection').slideToggle()

    if ($(this).find('.title-arrow').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
      $(this).find('.title-arrow').css('transform', 'rotate(180deg)');
    } else {
      $(this).find('.title-arrow').css('transform', 'rotate(0deg)');
    }
  });

  // Selection on click in MOBILE FILTER options

  $('.menuSelection-elem').click(function() {
    $(this).toggleClass('filter-selected');
  });

  $('.rowMain-elem').click(function() {
    $('.rowMain-elem').removeClass('filter-selected');
    $(this).addClass('filter-selected');
  });

  // Clear selection of filter options

  $('#clear-button').click(function() {
    $(this).parent().parent().parent().find('.filter-selected').removeClass('filter-selected')
  });

  // "Load more experiences"


  // datepicker

  $('#datepicker').datepicker({
    minDate: 0,
    dayNamesMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    firstDay: 1
  })

  var $slick_slider = $('.scheduleTableTimeRow');


  var settings = {
    infinite: false,
    slidesToShow: 9,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    // mobileFirst: true,
    prevArrow: '<div class="scheduleElementArrowLeft"></div>',
    nextArrow: '<div class="scheduleElementArrowRight"></div>',
    responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        arrows: true,
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 767,
      settings: "unslick"
    },
    ]
  }

  $( ".footerWrap" ).hide();
  $( ".footerWrap" ).fadeIn( "slow" );
})
