$(document).ready(function() {
    $('header .logo span').hover(function() {
      $(this).css({
        'color': '#30770E',
        'font-size': '22px'
      });
    }, function() {
      $(this).css({
        'color': '#333',
        'font-size': ''
      });
    });
  });




$(document).ready(function() {
    $('.workGrid button').hover(function() {
      $(this).css('background-color', '#fff');
      $(this).css('color', '#00b894');
      $(this).css('border', '2px solid #00b894');
    }, function() {
      $(this).css('background-color', '#30770E');
      $(this).css('color', '#fff');
      $(this).css('border', 'none');
    });
  });

 

  

 
 
  $(document).ready(function() {
    $('.mySkills img').hover(function() {
      $(this).css('transform', 'scale(1.2)');
    }, function() {
      $(this).css('transform', 'scale(1)');
    });
  });


  $(document).ready(function() {
    $('.workGrid img').hover(function() {
      $(this).css('transform', 'scale(1.2)');
    }, function() {
      $(this).css('transform', 'scale(1)');
    });
  });



  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#backToTopBtn').fadeIn();
      } else {
        $('#backToTopBtn').fadeOut();
      }
    });
  
    $('#backToTopBtn').click(function() {
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  });