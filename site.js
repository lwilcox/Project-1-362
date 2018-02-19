$('#contact-form').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var email = $('#email').val();
    var name = $('#name').val();
    var birthday = $('#birthday').val();
    var check = new Date();
    var agecheck = check.getYear();
    var check2 = /\d{10}/;
    var check3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    check = new Date(check.setYear(check.getYear() - 18));

    if(!(check3.test(email)))
    {
      e.preventDefault();
      console.log('invalid email address');
      $('#email-warning').remove();
      $('#email-input').append('<li id="email-warning">Please enter a valid email address!</li>');
    }
    if(!(check2.test(phone)))
    {
      e.preventDefault();
      console.log('invalid phone number');
      $('#phone-warning').remove();
      $('#phone-input').append('<li id="phone-warning">Please enter a valid telephone number!</li>');
    }
    if(check2.test(phone) && check3.test(email)) {
      e.preventDefault();
      $('#team').remove();
      $('#name-input').remove();
      $('#email-input').remove();
      $('#phone-input').remove();
      $('#submit').remove();
      $('#learn-more').remove();
      //$(this).remove();
      $('form').append('<h1 id="thankyou">Thank You, ' + name + '!</h1>');
      $('form').append('<h1 id="thankyou">Your form has been submitted.</h1>');
      $('form').append('<h1 id="thankyou">Email Address: ' + email + '</h1>');
    }
  }
);
