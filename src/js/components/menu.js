import { OPEN, ACTIVE } from '../constants';

$('.js-btn-open').click(function(e) {
  if (window.matchMedia('(max-width: 767px)').matches) {
  	e.preventDefault();
    $('.js-menu').addClass(OPEN);
  }
});
$('.js-btn-close').click(function(e) {
  	e.preventDefault();
  $('.js-menu').removeClass(OPEN);
});
