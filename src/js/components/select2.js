import Select2 from 'select2';

$('.js-field-select').each(function() {
  $(this).select2({
    minimumResultsForSearch: -1,
    placeholder: $(this).attr('data-placeholder'),
    dropdownParent: $(this).parent()
  });
});
