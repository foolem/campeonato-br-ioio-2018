$(document).ready(function() {
  $('#schedule-anchor').click(function() {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 800);
      return !1
  });
  $('#rules-anchor').click(function() {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 800);
      return !1
  });
  $('#results-anchor').click(function() {
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 800);
      return !1
  });
});
