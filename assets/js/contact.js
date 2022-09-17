/*-----------------------------------------------------------
 * Template Name    : RectCV - Personal Bootstrap 4 HTML Template
 * Author           : Narek Sukiasyan
 * Version          : 1.0.0
 * Created          : May 2020
 * File Description : Contact US script file for theme
 *--
 */

//Disable Form function
function contact_state(state) {
  if (state == "disable") {
    $("#contact-btn").removeClass("btn-loading");
    $("#contact-btn").removeClass("active");
    $("#contact-btn").addClass("disabled");

    $("#contact-form .form-control").each(function () {
      $(this).addClass("disabled");
    });
  }

  if (state == "loading") {
    $("#contact-btn").addClass("btn-loading");
  }
}


// emailjs library specific
(function() {
  // Set up the API public key
  emailjs.init('wCB2YJjjt5ftkjcQa');
})();

window.onload = function() {
  this.sended = false;
  var that = this;

  var successMessage = "Message Send",
      repeatMessage = "Message already Send",
      warningMessage = "Something wrong! Please try later";

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    contact_state("loading");
    if (!that.sended) {

      // these IDs from the previous steps
      emailjs.sendForm('service_s1o17pn', 'template_0ii5pbb', this)
          .then(function () {
            custom_alert(successMessage, "success");
            contact_state("disable");
          }, function (error) {
            custom_alert(warningMessage, "error");
            contact_state("disable");
          });

      that.sended = true;
    } else {
      custom_alert(repeatMessage, "success");
      contact_state("disable");
    }

  });
}

/*
$(function () {
  this.sended = false;
  var that = this;

  var form = $("#contact-form"),
    successMessage = "Message Send",
    warningMessage = "Something wrong! Please try later";

  form.on("submit", function (event) {
    //Change URL address if you need

    contact_state("loading");

    if (!that.sended) {
      $.ajax({
        url: "php/form.php",
        type: "POST",
        data: form.serialize(),
        success: function (response) {
          var d = JSON.parse(response);
          if (d.status == "success") {
            custom_alert(successMessage, "success");
            contact_state("disable");
          } else {
            custom_alert(warningMessage, "error");
            contact_state("disable");
          }
        },
        error: function (response) {
          custom_alert(warningMessage, "error");
          contact_state("disable");
        },
      });

      that.sended = true;
    }

    event.preventDefault();
  });
});
*/


