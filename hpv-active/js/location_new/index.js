//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ../utiles/slick.min.js
//=require ./nav.js
//=require ./language.js

$(function() {
	// SLIDER

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

  $('.topScreen-slider').slick({
    arrows: true,
    dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
    infinite: true,
    swipe: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="topScreenNavArrow topScreenNavArrowLeft"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" xml:space="preserve"><g id="Page-1_1_"><g id="стрелочка_1_"><g id="Graphic-_x2F_-Narrow-_x2F_-Black_1_" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy_1_" fill="none" stroke="#000000" points="0,35 15,17.5 0,0 			"/></g></g></g></svg></div>',
    nextArrow: '<div class="topScreenNavArrow topScreenNavArrowRight"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><g id="Page-1"><g id="стрелочка"><g id="Graphic-_x2F_-Narrow-_x2F_-Black" transform="translate(8.500000, 18.500000) scale(-1, 1) translate(-8.500000, -18.500000) translate(1.000000, 1.000000)"><polyline id="Page-1-Copy" fill="none" stroke="#000000" points="14.4,-0.1 -0.6,17.4 14.4,34.9 			"/></g></g></g></svg></div>',
    responsive: [{
      breakpoint: 766,
      settings: {
        swipe: true,
        draggable: true,
				arrows: false,
	  		autoplaySpeed: 5000,
      },
    }]
   });
})
