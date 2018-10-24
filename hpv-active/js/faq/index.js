//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ../utiles/lightbox.js
//=require ../vacancy/language.js
//=require ./nav.js

$(function () {
  // SELECT FOR DEPARTMENT TITLE
    $('.departmentTitle').click( function () {
    	if ($(this).parent().hasClass('active')) {
    		// если нажимаем по тому же департаменту скрываем список
    		$(this).parent().find('.departnmentVacancies').delay(20).slideToggle();
    		$(this).parent().removeClass('active');
    		$(this).parent().find('.arrow').css('transform', 'translate(0%, 0%) rotate(0deg');
    		$('.vacancy.toShow').removeClass('toShow');
    		$('.departmentPosition.deactivePos').removeClass('deactivePos');
    		$('.activePos').removeClass('activePos');
    	} else {
    		$(this).parent().addClass('active');
    		$(this).parent().find('.arrow').css('transform', 'translate(0%, 0%) rotate(180deg');
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
})
