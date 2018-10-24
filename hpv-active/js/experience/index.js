//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ../utiles/venobox.min.js
//=require ../utiles/slick.min.js
//=require ./nav.js
//=require ./language.js

$(function () {
  $('.venobox').venobox({
    titleattr: 'data-title',
    numeratio: true,
    overlayColor: '#ffffff',
    titleBackground: '#ffffff',
    closeBackground: '#ffffff',
    numerationBackground: '#ffffff',
    titleColor: '#000000',
    htmlClose : '<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"><g id="1366x900-ONE-EXP-+-Gallery-Copy" transform="translate(-1276.000000, -34.000000)" stroke="#000000"><g id="Graphic-/-Close-/-2px-/-Black-" transform="translate(1277.000000, 35.000000)"><g id="Group"><path d="M0.681818182,0.681818182 L14.3181818,14.3181818" id="Line" stroke-width="2"></path><path d="M14.3181818,0.681818182 L0.681818182,14.3181818" id="Line" stroke-width="2"></path></g></g></g></g></svg>',
    htmlPrev : '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1_1_"><g id="стрелочка_1_"><g id="Graphic-_x2F_-Narrow-_x2F_-Black_1_" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy_1_" fill="none" stroke="#000000" points="0,35 15,17.5 0,0 			"/></g></g></g></svg>',
    htmlNext : '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1"><g id="стрелочка"><g id="Graphic-_x2F_-Narrow-_x2F_-Black" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy" fill="none" stroke="#000000" points="14.4,-0.1 -0.6,17.4 14.4,34.9 			"/></g></g></g></svg>',
    infinigall: true,
    overlayClose: false,
    spinColor: '#ffffff',
    cb_post_open  : function(obj, gallIndex, thenext, theprev){
      var imgHeight = document.querySelector('.vbox-content').offsetHeight
      var next = document.querySelector('.vbox-next')
      var prev = document.querySelector('.vbox-prev')
      next.style.top = 'calc((' + imgHeight + 'px + 83px + 35px) / 2)'
      prev.style.top = 'calc((' + imgHeight + 'px + 83px + 35px) / 2)'
    },
    cb_post_resize: function(){
      var imgHeight = document.querySelector('.vbox-content').offsetHeight
      var next = document.querySelector('.vbox-next')
      var prev = document.querySelector('.vbox-prev')
      next.style.top = 'calc((' + imgHeight + 'px / 2) + 83px)'
      prev.style.top = 'calc((' + imgHeight + 'px / 2) + 83px)'
    },
  });

  // Sliders functionality
  // SLIDER Other exp

  $('.otherExp').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<div class="expBlockArrow expBlockArrowLeft"><div class="arrowLeft"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1_1_"><g id="стрелочка_1_"><g id="Graphic-_x2F_-Narrow-_x2F_-Black_1_" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy_1_" fill="none" stroke="#000000" points="0,35 15,17.5 0,0 			"/></g></g></g></svg></div></div>',
      nextArrow: '<div class="expBlockArrow expBlockArrowRight"><div class="arrowRight"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1"><g id="стрелочка"><g id="Graphic-_x2F_-Narrow-_x2F_-Black" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy" fill="none" stroke="#000000" points="14.4,-0.1 -0.6,17.4 14.4,34.9 			"/></g></g></g></svg></div></div>',
      responsive: [
      {
        breakpoint: 1022,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 938,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          swipe: true,
          draggable: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 767,
        settings: {
					infinite: true,
          slidesToShow: 1,
          arrows: false,
          swipe: true,
          draggable: true,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
					variableWidth: true
        },
      }
    ]
  });

  // SLIDER Main
  	$('.sliderBlockSlider').slick({
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
  		infinite: true,
      swipe: true,
      draggable: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
      variableWidth: true,
  		prevArrow: '<div class="sliderBlockArrow sliderBlockArrowLeft"><div class="arrowLeft"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1_1_"><g id="стрелочка_1_"><g id="Graphic-_x2F_-Narrow-_x2F_-Black_1_" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy_1_" fill="none" stroke="#000000" points="0,35 15,17.5 0,0 			"/></g></g></g></svg></div></div>',
  		nextArrow: '<div class="sliderBlockArrow sliderBlockArrowRight"><div class="arrowRight"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1"><g id="стрелочка"><g id="Graphic-_x2F_-Narrow-_x2F_-Black" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy" fill="none" stroke="#000000" points="14.4,-0.1 -0.6,17.4 14.4,34.9 			"/></g></g></g></svg></div></div>',
  		responsive: [
        {
          breakpoint: 1019,
    			settings: {
            arrows: false
          },
        },
        {
    			breakpoint: 768,
    			settings: {
    				infinite: true,
  		  		slidesToShow: 1,
  		  		slidesToScroll: 1,
  		  		swipe: true,
            draggable: true,
            variableWidth: false,
            variableHeight: true,
            dots: true,
            dotsClass: 'sliderBlockPaging',
            customPaging: function (slider, i) {
                //FYI just have a look at the object to find available information
                //press f12 to access the console in most browsers
                //you could also debug or look in the source
                return  (i + 1) + ' / ' + slider.slideCount;
            }
    			},
  		  }]
	   });

    $('.sliderBlockSlider').on('setPosition', function () {
      var slickElem = $(this).find('.sliderElem');
      var slickElemHeight = $(slickElem).height();
      if (window.innerWidth < 768) {
        $(this).find('.sliderVideo').css('height', slickElemHeight + 'px');
      } else {
        $(this).find('.sliderVideo').css('height', '');
      }
    });
})
