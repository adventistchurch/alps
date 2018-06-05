/* MAIN JS
--------------------------------------------*/

(function($) {

  // BASE SETUP ------------------------------------//

  // Add js class to html element.
  document.documentElement.className += ' js';

  // Add class for IE10.
  if (Function('/*@cc_on return document.documentMode===10@*/')()) {
    document.documentElement.className += ' ie10';
  }

  // Add class if is mobile
  function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }

  var nav = priorityNav.init({
      mainNavWrapper: ".c-priority-nav", // mainnav wrapper selector (must be direct parent from mainNav)
      mainNav: ".c-priority-nav__list", // mainnav selector. (must be inline-block)
      navDropdownLabel: '',
      navDropdownClassName: ".c-priority-nav__dropdown", // class used for the dropdown.
      navDropdownToggleClassName: "js-toggle-menu", // class used for the dropdown toggle.
  });

  // Add class if is mobile
  if (isMobile()) {
    $('html').addClass(' touch');
  } else if (!isMobile()){
    $('html').addClass(' no-touch');
  }

  // Lazy load images.
  if ($('img.lazy').length) {
    $('img.lazy').show().lazyload({
      threshold: 100,
      failure_limit: 9999,
    });
  }

  // Check window width
  var getWidth = function() {
    var width;
    if (document.body && document.body.offsetWidth) {
      width = document.body.offsetWidth;
    }
    if (document.compatMode === 'CSS1Compat' &&
      document.documentElement &&
      document.documentElement.offsetWidth) {
      width = document.documentElement.offsetWidth;
    }
    if (window.innerWidth) {
      width = window.innerWidth;
    }
    return width;
  };
  window.onload = function() {
    getWidth();
  }
  window.onresize = function() {
    getWidth();
  }

  // Sabbath Logo Icon
  var headerHeight = $('.c-header').outerHeight();
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > headerHeight) {
      $('.js-show-on-scroll').removeClass('is-hidden').addClass('is-visible');
    } else {
      $('.js-show-on-scroll').removeClass('is-visible').addClass('is-hidden');
    }
  });

  $(window).scroll(function(){
     var percent = $(document).scrollTop() / ($(document).height() - ($(document).height() - $(window).height() - ($(window).height() / 2)));
     $('.l-sabbath__logo-light').css('opacity', 1 - percent);
     $('.l-sabbath__overlay').css('opacity', 1 - percent);
  });

  // Hide sabbath column on small screens
  if (isMobile() && $('.body').hasClass('hide-sabbath--small')) {
    $('.body').addClass('hide-sabbath');
  }

  // SITE SPECIFIC JS ------------------------------//

  var toggleClasses = function(element) {
    var $this = element,
        $togglePrefix = $this.data('prefix') || 'this';

    // If the element you need toggled is relative to the toggle, add the
    // .js-this class to the parent element and "this" to the data-toggled attr.
    if ($this.data('toggled') == "this") {
      var $toggled = $this.parents('.js-this');
    } else {
      var $toggled = $('.' + $this.data('toggled'));
    }

    $this.toggleClass($togglePrefix + '-is-active');
    $toggled.toggleClass($togglePrefix + '-is-active');

    // Remove a class on another element, if needed.
    if ($this.data('remove')) {
      $('.' + $this.data('remove')).removeClass($this.data(
            'remove'));
    }
  };

  // Grab first character for dropcaps
  $('.has-dropcap p:eq(0)').each(function() {
    var text = $(this).html();
    var first = $('<span class="o-dropcap u-theme--background-color--base"></span>').attr('data-letter', text.charAt(0));
    $(this).html(text.substring(1)).prepend(first);
  });

  // Add color classes
  //$('.is-featured').addClass('u-theme--color--lighter');

  /**
   * Fixto
   */
  $('.js-sticky').fixTo('.js-sticky-parent', {
    className: 'sticky-is-active',
    useNativeSticky: false,
    zIndex: 9999
  });

  /*
   * Toggle Active Classes
   *
   * @description:
   *  toggle specific classes based on data-attr of clicked element
   *
   * @requires:
   *  'js-toggle' class and a data-attr with the element to be
   *  toggled's class name both applied to the clicked element
   *
   * @example usage:
   *  <span class="js-toggle" data-toggled="toggled-class">Toggler</span>
   *  <div class="toggled-class">This element's class will be toggled</div>
   *
   */
  $('.js-toggle').on('click', function(e) {
    e.stopPropagation();
    toggleClasses($(this));
  });

  // Toggle parent class
  $('.js-toggle-parent').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('this-is-active');
    $this.parent().toggleClass('this-is-active');
  });

  // Toggle hovered classes if not touch device
  if (!isMobile()) {
    $('.js-hover').on('mouseenter mouseleave', function(e) {
      e.preventDefault();
      toggleClasses($(this));
    });
  }

  $('.c-drawer__nav .c-subnav__arrow').on('click', function(e) {
    e.stopPropagation();
    $('.c-drawer__container').toggleClass('subnav-is-active');
    $('.c-drawer__subnav li').remove();

    if ($(this).hasClass('this-is-active')) {
      $(this).removeClass('this-is-active');
      $(this).parents('.c-primary-nav__list').removeClass('this-is-active');
      $(this).parents('.c-drawer__nav-primary').removeClass('this-is-active');
      $(this).parents('.c-primary-nav').removeClass('this-is-active');
      $(this).parents('.c-drawer__nav').children('.c-drawer__subnav').removeClass('this-is-active');
      $(this).parents('.c-drawer__nav').removeClass('this-is-active');
    } else {
      $(this).addClass('this-is-active');
      $(this).parents('.c-primary-nav__list').addClass('this-is-active');
      $(this).parents('.c-drawer__nav-primary').addClass('this-is-active');
      $(this).parents('.c-primary-nav').addClass('this-is-active');
      $(this).parents('.c-drawer__nav').children('.c-drawer__subnav').addClass('this-is-active');
      $(this).parents('.c-drawer__nav').addClass('this-is-active');
      $(this).parent('li').clone().appendTo('.c-drawer__subnav');
    }

    $('.c-subnav__arrow').not(this).parent().removeClass('this-is-active');
    $('.c-subnav__arrow').not(this).removeClass('this-is-active');
  });

  // Hover effects on drawer submenu not on mobile
  if (!isMobile() && getWidth() > 700) {
    $('.c-drawer .c-primary-nav__list-item').on('mouseenter', function() {
      $('.c-drawer__container').addClass('subnav-is-active');
      $(this).addClass('this-is-active');
      $(this).parent().addClass('this-is-active');
      $(this).parent().parent().parent().addClass('this-is-active');
    });

    $('.c-drawer .c-primary-nav__list-item').on('mouseleave', function() {
      $('.c-drawer__container').removeClass('subnav-is-active');
      $(this).removeClass('this-is-active');
      $(this).parent().removeClass('this-is-active');
      $(this).parent().parent().parent().removeClass('this-is-active');
    });
  }

  // Remove active classes on click of drawer
  $('.c-drawer').on('click', function() {
    $('.body').removeClass('menu-is-active');
    $('.c-primary-nav__list, .c-primary-nav__list-item, .c-drawer__nav-primary, .c-subnav__arrow').removeClass('this-is-active');
  });

  // Open drawer when menu toggle is clicked
  $('.js-toggle-menu, .c-priority-nav__toggle').on('click', function(e) {
    e.stopPropagation();
    $('.c-drawer').toggleClass('this-is-active');
    $('.body').addClass('menu-is-active');
  });

  // Make search input active with toggle is clicked
  $('.js-toggle-search').on('click', function() {
    setTimeout(function(){
      $('.c-drawer__search input').focus();
    }, 250);
  });

  // Slick carousel (single item)
  if ($('.js-carousel__single-item').length) {
    $('.js-carousel__single-item').slick({
      lazyLoad: 'ondemand',
      speed: 300,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      fade: true,
      nextArrow: '.c-arrow__next',
      prevArrow: '.c-arrow__prev',
      touchThreshold: 11,
      dots: true,
      adaptiveHeight: true
    });
  }

  // Slick carousel (multiple items)
  if ($('.js-carousel__multi-item').length) {
    $('.js-carousel__multi-item').slick({
      speed: 300,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      arrows: true,
      prevArrow:'<span class="c-arrow c-arrow--prev u-icon u-icon--s u-theme--color--darker">&#8249;</span>',
      nextArrow:'<span class="c-arrow c-arrow--next u-icon u-icon--s u-theme--color--darker">&#8250;</span>',
      touchThreshold: 11,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        }
      ]
    });
  }

  // Show/ Hide main nav on scroll.
  var orgTop = 80;
  $(window).scroll(function() {
    if (getWidth() < 700) {
      var currentTop = $(this).scrollTop(),
          $navBar = $('.header');

      if (currentTop > orgTop && !$('.header.nav-is-active').length) {
        $navBar.addClass('hide-nav');
      } else {
        $navBar.removeClass('hide-nav');
      }

      // Be sure not to hide it too soon.
      if (currentTop < 80) {
        $navBar.removeClass('hide-nav');
      } else {
        orgTop = currentTop;
      }
    }
  });

  // Responsive videos
  if ($.fn.fitVids) {
    $('.c-article__body, .text, .fitvid').fitVids();
  }

  // Apply parallax effect to background images.
  function parallaxIt() {
    var $fwindow = $(window),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // On window scroll event.
    $fwindow.on('scroll resize', function() {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    // Apply parallax effect to inner content (if applicable).
    $('[data-type="content"]').each(function (index, e) {
      var $contentObj = $(this),
          fgOffset = parseInt($contentObj.offset().top),
          yPos,
          speed = ($contentObj.data('speed') || 1 );

      $fwindow.on('scroll resize', function (){
        yPos = fgOffset - scrollTop / speed;
        $contentObj.css('top', yPos);
      });
    });

    // Parallax the background image.
    $('[data-type="background"]').each(function(){
      var $backgroundObj = $(this),
          bgOffset = parseInt($backgroundObj.offset().top),
          yPos,
          coords,
          speed = ($backgroundObj.data('speed') || 0 );

      $fwindow.on('scroll resize', function() {
        yPos = - ((scrollTop - bgOffset) / speed);
        coords = '50% '+ yPos + 'px';
        $backgroundObj.css({ backgroundPosition: coords });
      });
    });

    // Triggers winodw scroll for refresh,
    $fwindow.trigger('scroll');
  };

  // Init parallax
  if ($('.has-parallax').length) {
    parallaxIt()
  }

  /**
   * Modaal functionality
   * Reference:
   */
  if ($.fn.modaal) {
    $('.js-modal-image').modaal({
      type: 'image'
    });
  }

  // Theme switcher for colors
  $('.c-swatches--colors .c-swatches__item').click(function() {
    var thisColor = $(this).data('color');

    $('.c-swatches--colors .c-swatches__item').removeClass('active');
    $(this).addClass('active');

    // Remove any class that starts with "u-theme--"
    $('html').removeClass(function(index, css) {
      return (css.match (/(^|\s)u-theme--\S+/g) || []).join(' ');
    }).addClass('u-theme--' + thisColor);
  });

  // Theme switcher for background
  $('.c-swatches--background .c-swatches__item').click(function() {
    $('body').toggleClass('u-theme--dark');
    $(this).toggleClass('active');
  });

  // Theme switcher for grid lines
  $('.c-swatches--grid .c-swatches__item').click(function() {
    $('body').toggleClass('has-grid');
    $(this).toggleClass('active');
  });

})(jQuery); // Fully reference jQuery after this point.
