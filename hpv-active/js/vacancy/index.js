//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ../utiles/slick.min.js
//=require ./nav.js
//=require ./language.js

$(function () {
  'use strict';

  // SELECT FOR DEPARTMENT TITLE
  $('.departmentTitle').click( function () {
  	if ($(this).parent().hasClass('active')) {
  		// если нажимаем по тому же департаменту скрываем список
  		$(this).parent().find('.departnmentVacancies').delay(20).slideToggle();
  		$(this).parent().removeClass('active');
  		$(this).parent().find('span').css('transform', 'translate(0%, 0%) rotate(0deg');
  		$('.departnmentVacancies.toShow').removeClass('toShow');
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
        // скролим наверх
        window.scrollTo(0, 0);

    		// убираем активное выделение предыдущей вакансии
    		$('.activePos').removeClass('activePos');

    		// делаем все остальные вакансии неактивными
    		$('.departmentPosition').addClass('deactivePos');

    		// на выбранную вакансию навешиваем активный класс
    		$(this).addClass('activePos');
    		var attr = $(this).attr("data-attr");

    		$(".rightCol .toShow").removeClass("toShow");
    		$(".rightCol").find("[data-attr='" + attr + "']").addClass("toShow");
    		// console.log($(".vacancy").find("[data-attr='" + attr + "']"));
    	}

    	if ($( window ).width() < 767) {
        $('.mobileCross').show();
        $('.topNav').hide();
      }

     $( ".footerWrap" ).hide();
     $( ".footerWrap" ).fadeIn( "slow" );
    });

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
          // $('.navItem.navSearch.navSearchDark').css('opacity', '0');
      } else {
          $(this).removeClass('active');
          $(this).addClass('deactive');
          $('.navMenuHoverIcon').css('transform', 'translate(0%, 0%) rotate(0deg)');
          $('.menuHidden').slideToggle();
          $('.menu').css('height', '39px');
          $('.menuActive').removeClass('isOpen');
          // $('.navItem.navSearch.navSearchDark').css('opacity', '1');
      }
  });

    // if desktop or tablet show first vacancy
    if ($( window ).width() >= 768) {
      $('.departmentTitle')[0].click()
      $('.departmentTitle').first().parent().find('.departmentPosition').first().click()
    }

    $('.searchLang').click( function () {
      if ($('.searchLangOpen').length == 0) {
        $(this).css('height', '190px');
        $(this).addClass('searchLangOpen');
        $('.searchLangIcon').css('transform', 'rotate(180deg)');
        $('.footerMenuHiddenLang').delay(100).slideToggle();
      } else {
          $('.searchLangIcon').css('transform', 'rotate(0deg)');
          $(this).removeClass('searchLangOpen');
          $('.footerMenuHiddenLang').slideToggle().delay(100);
          $(this).css('height', '51px');
      }
    });
})
