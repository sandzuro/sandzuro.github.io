(function() {
  $(document).one('scroll', function() {
    $('[data-trigger="hide-menu"]').scrollex({
      top: '88vh',
      enter: function() {
        if (window.innerWidth > 1025) {
          $('.topNav').css({transform: "translateY(-100%)"})
          $('.topNav-bg').css({transform: "translateY(-100%)"})
        }
      },
      leave: function () {
        if (window.innerWidth > 1025) {
          $('.topNav').css({transform: "translateY(0%)"})
          $('.topNav-bg').css({transform: "translateY(0%)"})
        }
      }
    });

    $('[data-trigger="light-menu"]').scrollex({
      mode: 'top',
      enter: function() {
        $('.navWrapper').removeClass('transparent')
        $('.navWrapper').removeClass('dark')
      },
      leave: function () {
        //console.log('leave light menu')
      }
    })

    $('[data-trigger="dark-menu"]').scrollex({
      mode: 'top',
      enter: function() {
        $('.navWrapper').addClass( 'dark' );
      },
      leave: function () {
        //console.log('leave dark menu')
      }
    })

    $('[data-trigger="transparent-menu"]').scrollex({
      top: '90',
      bottom: '90',
      enter: function() {
        $('.navWrapper').addClass( 'transparent' )
      },
      leave: function () {
        $('.navWrapper').removeClass('transparent')
      }
    })

    $('[data-mob-trigger="light-menu"]').scrollex({
      mode: 'top',
      enter: function() {
        if (window.innerWidth < 1024) {
          $('.navWrapper').removeClass('transparent')
          $('.navWrapper').removeClass('dark')
        }
      },
      leave: function () {
        //console.log('leave light menu')
      }
    });

    $('[data-mob-trigger="transparent-menu"]').scrollex({
      mode: 'top',
      enter: function() {
        if (window.innerWidth < 1024) {
          $('.navWrapper').addClass( 'transparent' )
        }
      },
      leave: function () {
        if (window.innerWidth < 1024) {
          $('.navWrapper').removeClass('transparent')
        }
      }
    });
  })

  //OPEN MOBILE NAV
  $('.navShrink-mobile').click( function() {
    if (window.innerWidth < 768) {
      if ($('.navShrink-cross').length === 0) {
        $('.mobileNav').addClass('mobileNav-isOpen');
        $('.topLogoDark path').css('fill', 'black')
        $('.footerWrap.bottom').hide();

        setTimeout(function() {
          $('.expPageCentrify').hide();
        }, 300)
      } else {
        $('.mobileNav').removeClass('mobileNav-isOpen');
        $('.topLogoDark path').css('fill', '')
        $('.expPageCentrify').show();
        $('.footerWrap.bottom').show();
      }
    }
  });

  $('.mobileCross-menu').click( function() {
    if (window.innerWidth < 768) {
      $('.mobileNav').removeClass('mobileNav-isOpen');
      $('.topNav').css('position', 'fixed');
      $('.topNav').css('height', '');
      $('.topNav').css('padding-top', '');
      $('.topLogoDark path').css('fill', '')
      $('.expPageCentrify').show();
      $('.footerWrap.bottom').show();
    }
  });

  $('.navShrink-tablet').click( function() {
      if ($('.tabletNav-isOpen').length === 0) {
        $('.tabletNav').addClass('tabletNav-isOpen');
        setTimeout(function() {
          $.scrollLock( true );
          $('.tabletBlurLayer').addClass('tabletBlurLayer--toShow');
        }, 300)
      } else {
        $.scrollLock( false );
        $('.tabletNav').removeClass('tabletNav-isOpen');
      }
  });

  $('.tabletCross').click( function() {
    $.scrollLock( false );
    $('.tabletBlurLayer').removeClass('tabletBlurLayer--toShow');
    setTimeout(function() {
      $('.tabletNav').removeClass('tabletNav-isOpen');
    }, 300)
  });

  $('.tabletBlurLayer').click( function() {
    $.scrollLock( false );
    $('.tabletBlurLayer').removeClass('tabletBlurLayer--toShow');
    setTimeout(function() {
      $('.tabletNav').removeClass('tabletNav-isOpen');
    }, 300)
  });

  var prevWidth = window.innerWidth

  window.addEventListener('resize', function() {
    if (prevWidth > 768 && prevWidth < 1025 && window.innerWidth >= 1025) {
      prevWidth = window.innerWidth
      $.scrollLock( false )
      $('.topNav').css('transform', '');
      $('.tabletNav').removeClass('tabletNav-isOpen')
      $('.tabletBlurLayer').removeClass('tabletBlurLayer--toShow')
    } else if (prevWidth >= 1025 && window.innerWidth >= 1025) {
      $.scrollLock( false )
      $('.tabletNav').removeClass('tabletNav-isOpen')
      $('.tabletBlurLayer').removeClass('tabletBlurLayer--toShow')
    } else if (prevWidth < 768 && window.innerWidth >= 769) {
      prevWidth = window.innerWidth
      $('.mobileNav').removeClass('mobileNav-isOpen');
      $('.topNav').css('position', '');
      $('.topNav').css('height', '');
      $('.topNav').css('padding-top', '');
      $('.topLogoDark path').css('fill', '')
      $('.expPageCentrify').show();
      $('.footerWrap.bottom').show();
      $('.expPageCentrify').show();
    } else if (prevWidth > 768 && window.innerWidth <= 768) {
      $('.tabletBlurLayer').removeClass('tabletBlurLayer--toShow')
      $('.tabletNav').removeClass('tabletNav-isOpen')
      $.scrollLock( false )
      $('.expPageCentrify').show();
      $('.footerWrap.bottom').show();
      $('.topLogoDark path').css('fill', '')
    }
  })

})();
