

$(document).ready(function() {

  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url') );
  });
  // this - refers to $('section#screenshots a') that executed the above funciton

  var nav = $('.navbar-fixed-top');
  var distance = $('.navbar-fixed-top').offset();

  // console.log(distance);

  if (distance.top >= 300) {
    nav.addClass('effect');
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >=300) {
      nav.addClass('effect');
    } else {
      nav.removeClass('effect');
    }
  });

  $('#about .blue-circle').waypoint(function() {
      $('#about .blue-circle').addClass('animated fadeInUp')
    }, {
      offset: '50%'
  });

  $('#features .blue-circle').waypoint(function() {
      $(this.element).addClass('animated fadeInUp')
      // console.log(this.element);
    }, {
      offset: '50%'
  });

  $('.features-image img').waypoint(function() {
      $('.features-image img').addClass('animated flipInY')
    }, {
      offset: '50%'
  });

  $('#screenshots .col-sm-4').waypoint(function() {
      $(this.element).addClass('animated rollIn');
      $(this.element).css({'opacity':1});
    }, {
      offset: '50%'
  });

  $('#download div.phone img').waypoint(function() {
      $(this.element).addClass('animated fadeInLeft');
    }, {
      offset: '50%'
  });

  $('#download .platforms > div').waypoint(function() {
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '50%'
  });

  $('#form').bootstrapValidator({
    message: 'This value is not valid',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
    },
    fields: {
      name: {
        validators: {
          notEmpty: {
            message: 'This field is required and cannot be empty'
          }
        } //validators
      }, //name
      email: {
        validators: {
          notEmpty: {
            message: 'This field is required and cannot be empty'
        },
          emailAddress: {
            message: 'The input is not a valid address'
        }
      } //validators
    }, //email
    message: {
      validators: {
        notEmpty: {
          message: 'The message cannot be empty, kindly add a message.'
        }
      } //validators
    } //message
  } // fields

  }).on('success.form.bv', function(e) {
    e.preventDefault();

		var $form = $(e.target);

		var bv = $form.data('bootstrapValidator');

		$.post($form.attr('action'), $form.serialize(), function(result) {
			console.log(result);
		},'json' );
  });  //success.form.bv

  var btt = $('.back-to-top');

  btt.on('click', function(e) {
    $('html, body').animate({
      scrollTop:0

    }, 500);

    e.preventDefault();
  });

  $(window).on('scroll', function() {
      var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if(top > height) {
          if(!btt.is(':visible')) {
            btt.fadeIn();
          }
        } else {
          btt.hide();
        }
  });

});  //end of jQuery



// smoothScroll
smoothScroll.init({
  speed: 700,
  offset: 50,
  easing: 'easeInOutQuad',
  updateURL: false,
  offset: 50

});
