// FORM HANDLERS

$(function () {


    // hides the error functions until validation is run
    // $('.error').hide();
    $(".questionForm-button").click(function() {
      alert ("button clicked!");
      // validate and process form here

      $.('.error').hide();
      var firstname = $("input#firstname").val();
      if (firstname != "") {
        return false;
      }
      var contact_name = $("input#contact_name").val();
      var contact_emailphone = $("input#contact_emailphone").val();
      var contact_msg = $("input#contact_msg").val();


      var dataString = 'firstname=' + firstname + '&contact_name=' + contact_name + '&contact_emailphone=' + contact_emailphone + '&contact_msg=' + contact_msg
      // this tests out whether we're grabbing the right values
      alert (dataString); return false;
      $.ajax({
        type: "POST",
        url: "http://ll_dev.saatvamattress.com/ajax-contact.php",
        data: dataString,
        success: function() {
          alert ('success!');
        }
      });

    });
  });



});