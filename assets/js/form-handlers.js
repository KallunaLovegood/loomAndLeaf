// FORM HANDLERS
$(function () {

  function submitForm(e) {
    //prevents page refresh (point of AJAX)
    e.preventDefault();

    // get the data from the form
    var payload = {
      firstname: $('#firstname').val(),
      contact_name: $('#contact_name').val(),
      contact_emailphone: $('#contact_emailphone').val(),
      contact_msg: $('#contact_msg').val(),
    };

    // send off request to server (this is where we make an AJAX request)
    $.ajax({
      type: 'POST',
      url: 'http://ll_dev.saatvamattress.com/ajax-contact.php',
      data: payload,
      success: function (data, status) {
        console.log('SUCCES', data, status);
        // FLASH MESSAGE: awesome!
      },
      error: function (jqXHR, status) {
        console.log('ERROR', status);
        // FLASH MESSAGE: WOMP WOMP
      }
    });

  }

  // handler to submit the form.
  $('.questionForm-button').click(submitForm);
});