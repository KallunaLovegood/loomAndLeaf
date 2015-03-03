// FORM HANDLERS
$(function () {

  function submitContactForm(e) {
    //prevents page refresh (point of AJAX)
    // alert ("works");
    e.preventDefault();

    // get the data from the form
    var payload = {
      firstname: $('#firstname').val(),
      contact_name: $('#contact_name').val(),
      contact_emailphone: $('#contact_emailphone').val(),
      contact_msg: $('#contact_msg').val(),
    };
    // console.log (payload) - make sure you're capturing everything

    // send off request to server (this is where we make an AJAX request)
    $.ajax({
      type: 'POST',
      url: 'http://ll_dev.saatvamattress.com/ajax-contact.php',
      data: payload,
      success: function (data, status) {
        console.log('SUCCESS', data, status);
        // FLASH MESSAGE: awesome!
        alert ("woohoo!");
      },
      error: function (jqXHR, status) {
        console.log('ERROR', status);
        // FLASH MESSAGE: WOMP WOMP
        alert ("nope!");
        return false;
      }
    });
  }

  function submitBrochureForm(e) {
    // prevents page refresh
    // alert ("works!");
    e.preventDefault();

    // get the data from the form
    var payload = {
      firstname: $('#firstname').val(),
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      address: $('#address').val(),
      address2: $('#address2').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      zip: $('#zip').val(),
      email: $('#email').val(),
    };
    // console.log(payload); - make sure everything is captured

    // send off request to server
    $.ajax({
      type: 'POST',
      url: 'http://ll_dev.saatvamattress.com/ajax-brochure.php',
      data: payload,
      success: function (data, status) {
        console.log('SUCCESS', data, status);
        // flash message: awesome
        alert ("woohoo!");
      },
      error: function (jqXHR, status) {
        console.log('ERROR', status);
        // flash message: nope
        // return false;
        alert ("nope");
      }
    });
  }

  // contact form handler to submit the form.
  $('.questionForm-button').click(submitContactForm);
  // brochure form handler to submit the form
  $('.brochureForm-button').click(submitBrochureForm);
});