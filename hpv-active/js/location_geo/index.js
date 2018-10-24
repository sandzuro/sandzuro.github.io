//=require ../utiles/jquery.scrollLock.js
//=require ../utiles/jquery.scrollex.js
//=require ../vacancy/nav.js
//=require ./language.js

$( document ).ready(function() {

	// SLIDER

	$('.otherExp').slick({
  		infinite: true,
  		slidesToShow: 3,
  		arrows: false,
  		slidesToScroll: 3,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		responsive: [
  		{
  			breakpoint: 938,
  			settings: {
  				infinite: true,
		  		slidesToShow: 2,
		  		arrows: false,
		  		slidesToScroll: 2,
		  		swipe: true,
		  		autoplay: true,
		  		autoplaySpeed: 4000,
  			},
  		},

  		{
  			breakpoint: 767,
  			settings: {
  				infinite: true,
		  		slidesToShow: 2,
		  		arrows: false,
		  		swipe: true,
		  		slidesToScroll: 2,
		  		autoplay: true,
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
		  		slidesToScroll: 1,
		  		autoplay: true,
		  		autoplaySpeed: 4000,
  			},
  		},
  		]
	});

  $('#map').mouseenter(function() {
      var $marker1 = $('#map').find('img')[0];
      var $marker2 = $('#map').find('img')[1];
      var $marker3 = $('#map').find('img')[2];

      $marker1.className = 'marker1';
      $marker2.className = 'marker2';
      $marker3.className = 'marker3';

      // Добавить здесь mouseenter и hover на него
      $('.marker1').hover(function() {
          $marker1.src = './img/icon_geo_inactive.svg';
      }, function() {
          $marker1.src = './img/icon_geo_active.svg';
      });
      $('.marker2').hover(function() {
          $marker2.src = './img/icon_geo_inactive.svg';
      }, function() {
          $marker2.src = './img/icon_geo_active.svg';
      });
      $('.marker3').hover(function() {
          $marker3.src = './img/icon_geo_inactive.svg';
      }, function() {
          $marker3.src = './img/icon_geo_active.svg';
      });
  });

});

// MAP MANAGEMENT FUNCTION
function initMap() {
	var moscow = {lat: 55.753694, lng: 37.619927};
	var centerMars = {lat: 55.768960, lng: 37.626800};
	var parkCulture = {lat: 55.735912, lng: 37.592521};
	var novoslob = {lat: 55.780053, lng: 37.602004}
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: moscow,
	});
	var marker1 = new google.maps.Marker({
	  position: centerMars,
	  map: map,
      cardName: '#card_1',
	  icon: './img/icon_geo_click.svg',
	});
	var marker2 = new google.maps.Marker({
	  position: parkCulture,
	  map: map,
      cardName: '#card_2',
	  icon: './img/icon_geo_active.svg',
	});
	var marker3 = new google.maps.Marker({
	  position: novoslob,
	  map: map,
      cardName: '#card_3',
	  icon: './img/icon_geo_active.svg',
	});

    marker1.active = true;
    $(marker1.cardName).show();

    var markers = [marker1, marker2, marker3];

    markers.forEach(function(elem) {
        elem.addListener('mouseover', function() {
            if (this.active) {
                return
            }
            this.setIcon('./img/icon_geo_inactive.svg');
        });
        elem.addListener('mouseout', function() {
            if (this.active) {
                return
            }
            this.setIcon('./img/icon_geo_active.svg');
        });
        elem.addListener('click', function() {
            markers.forEach(function(elem) {
                if (elem.active = true) {
                    elem.active = false;
                    elem.setIcon('./img/icon_geo_active.svg');
                    $(elem.cardName).hide();
                }
            });
            this.setIcon('./img/icon_geo_click.svg');
            this.active = true;
            $(this.cardName).show();
        });
    });
}
