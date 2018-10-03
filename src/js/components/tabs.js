import {ACTIVE} from '.././constants';


$('.js-tabs').each(function() {
  const tab = $(this);
  const controls = tab.find('[data-tab]');
  const items = tab.find('[data-content]');

  $(controls).click(function(e) {
    const current = $(this);

    e.preventDefault();
    controls.removeClass(ACTIVE);
    current.addClass(ACTIVE);
    items.removeClass(ACTIVE);
    items.filter('[data-content=' + current.data('tab') + ']').addClass(ACTIVE);
  });
});







