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
  $('.mySkills img').hover(function() {
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

$(document).ready(function() {
  $(".projectInfo button").hover(function() {
    $(this).css("background-color", "#00c98d");
  }, function() {
    $(this).css("background-color", "#30770E");
  });
});


$(document).ready(function() {
  $(".myProjects img").hover(function() {
    $(this).css("width", "250px");
  }, function() {
    $(this).css("width", "240px");
  });
});