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
    $this.toggleClass('is-active');
    $this.parent().toggleClass('is-active');
  });


  $('.js-carousel__single-item').slick({
    speed: 300,
    mobileFirst: true,
    //autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    adaptiveHeight: true,
    nextArrow: '.arrow__next',
    prevArrow: '.arrow__prev',
    touchThreshold: 11,
    dots: true
  });

})(jQuery); // Fully reference jQuery after this point.
