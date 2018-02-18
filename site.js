$('#contact-form').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var email = $('#email').val();
    var birthday = $('#birthday').val();
    var check = new Date();
    var agecheck = check.getYear();
    var check2 = /\d{10}/;
    var check3 = /.*@.*/;
    check = new Date(check.setYear(check.getYear() - 18));


    //  Not sure whats wrong with my birthday validation but it's not working....
    if(!(check2.test(phone)))
    {
      console.log('invalid phone number');
      $('#phone-warning').remove();
      $('#phone-input').append('<li id="phone-warning">Please enter a valid telephone number</li>');
      return false;
    }
    if(!(check3.test(email)))
    {
      console.log('invalid email address');
      $('#warning').remove;
      $('#email-input').append('<li id="warning">Please enter a valid email address</li>');
      return false;
    }
    else {
      e.preventDefault();
      $(this).remove();
      $('body').append('<h1 id="thankyou">Thank You, ' + name + '! Your form has been submitted. Email Address: ' + email + '</h1>');
    }
  }
);
