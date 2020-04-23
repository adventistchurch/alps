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
  function isTouch() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  // Add class if is mobile
  if (isTouch()) {
    $('html').addClass(' touch');
  } else if (!isTouch()){
    $('html').addClass(' no-touch');
  }

  // Moves priority links to end of primary navigation
  $('.c-header__nav-primary .c-primary-nav__list-item .c-primary-nav__link.is-priority + span').hide();
  $('.c-header__nav-primary .c-primary-nav__list-item .c-primary-nav__link.is-priority').first().insertAfter( $('.c-header__nav-primary .c-primary-nav') );

  // Lazy load images.
  if ($('img.lazy').length) {
    $('img.lazy').show().lazyload({
      threshold: 100,
      failure_limit: 9999,
    });
  }

  // Scroll on click
  $('.c-page-header__scroll').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

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
  window.onorientationchange = function() {
    getWidth();
  }

  // Priority Navigation
  var nav = priorityNav.init({
    mainNavWrapper: ".c-priority-nav", // mainnav wrapper selector (must be direct parent from mainNav)
    mainNav: ".c-priority-nav__list", // mainnav selector. (must be inline-block)
    navDropdownClassName: "c-priority-nav__dropdown", // class used for the dropdown.
    navDropdownToggleClassName: "js-toggle-menu", // class used for the dropdown toggle.
    navDropdownLabel: "",
    breakpoint: 500,
  });

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
      $('.' + $this.data('remove')).removeClass($this.data('remove'));
    }
  };

  // Find first text node of an element
  function getFirstTextNode(el) {
    if (!el.childNodes && !el.childNodes.length) {
      return null;
    }

    if (el.childNodes[0].nodeName !== '#text') {
      return getFirstTextNode(el.childNodes[0]);
    }

    return el.childNodes[0];
  }

  // Grab first character for dropcaps
  $('.has-dropcap p:eq(0)').each(function() {
    var text = $(this).text();
    var first = $('<span class="o-dropcap u-theme--background-color--base"></span>').attr('data-letter', text.charAt(0));

    // Remove first text character from paragraph
    var textNode = getFirstTextNode(this);
    if (textNode) {
      textNode.textContent = textNode.textContent.substring(1);
    }

    $(this).prepend(first);
  });

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
  $('.js-hover').on('mouseenter mouseleave', function(e) {
    e.preventDefault();
    toggleClasses($(this));
  });

  $('.c-primary-nav__arrow').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('this-is-active');

    if ($(this).hasClass('this-is-active')) {
      $('.c-drawer__container').addClass('subnav-is-active');
      $(this).parent('li').clone(true, true).appendTo('.c-drawer__subnav');
      $(this).parents('.c-primary-nav__list').addClass('this-is-active');
      $(this).parents('.c-drawer__nav-primary').addClass('this-is-active');
      $(this).parents('.c-primary-nav').addClass('this-is-active');
      $(this).parents('.c-drawer__nav').children('.c-drawer__subnav').addClass('this-is-active');
      $(this).parents('.c-drawer__nav').addClass('this-is-active');
    } else {
      $('.c-drawer__container').removeClass('subnav-is-active');
      $('.c-drawer__subnav li').remove();
      $('.c-primary-nav__list').removeClass('this-is-active');
      $('.c-drawer__nav-primary').removeClass('this-is-active');
      $('.c-primary-nav').removeClass('this-is-active');
      $('.c-drawer__subnav').removeClass('this-is-active');
      $('.c-drawer__nav').removeClass('this-is-active');
    }

    $(this).removeClass('this-is-active');
  });

  // Hover effects on drawer submenu not on mobile
  if (getWidth() > 700) {
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
    $('.c-primary-nav__list, .c-primary-nav__list-item, .c-drawer__nav-primary, .c-primary-nav__arrow').removeClass('this-is-active');
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
      nextArrow: '.o-arrow--next',
      prevArrow: '.o-arrow--prev',
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
      prevArrow:'<span class="o-arrow o-arrow--prev u-icon u-icon--s u-theme--color--darker">&#8249;</span>',
      nextArrow:'<span class="o-arrow o-arrow--next u-icon u-icon--s u-theme--color--darker">&#8250;</span>',
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

  // Slick carousel (testimonies)
  if ($('.js-carousel__testimonies-media').length) {
    $('.js-carousel__testimonies-media').slick({
      speed: 300,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      arrows: true,
      prevArrow:'.o-arrow--prev',
      nextArrow:'.o-arrow--next',
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $('.js-carousel__testimonies-media').parent().find('.o-dots'),
      infinite: false,
      variableWidth: true
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

  // Output youtube duration in seconds
  function getDurationInSecond(youtubeDuration) {
    var re=/pt([0-9]+)M([0-9]+)S/gi,
        rex = new RegExp(re),
        du = rex.exec(youtubeDuration);
    if (du.length<1)
        return 0;
    var s=0;
    s+= du.length >1 && du[1]? parseInt(du[1], 10) * 60 :0; // adding minute
    s+= du.length >2 && du[2]? parseInt(du[1], 10) :0; //
    return s;
  }

  // Creates title and duration for Youtube videos
  var apiKey = 'AIzaSyAiCBcaYLra0GCWcoY6rTWktJWwd0VKQ6A';
  $('.js-video').each(function() {
    var videoId = $(this).attr('id');
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key="+ apiKey + "&fields=items(snippet(title),contentDetails(duration),id)&part=snippet,contentDetails",
      dataType: "jsonp",
      success: function(data) {
        var id = data.items[0].id;
        var title = data.items[0].snippet.title;
        var durationSeconds = getDurationInSecond(data.items[0].contentDetails.duration);
        var duration = moment.duration(durationSeconds, "seconds").format('h:mm:ss');
        $('#' + id + ' .js-video-title').append(title);
        $('#' + id + ' .js-video-duration').append(duration);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert (textStatus, + ' | ' + errorThrown);
      }
    });

    // Play video on click
    $(this).click(function(e) {
      $('#'+ videoId + ' iframe')[0].src += "?autoplay=1";
      e.preventDefault();
    });
  });

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
