
      function isNumberKey(evt)
      {
          var charCode = (evt.which) ? evt.which : event.keyCode
          if (charCode > 31 && (charCode < 48 || charCode > 57))
              return false;

          return true;
      }


      var alpha = "[ A-Za-z]";
      var numeric = "[0-9]";
      var alphanumeric = "[ A-Za-z0-9.,/]";
      var AlphName = "[ A-Za-z.]";

      function onKeyValidate(e, charVal) {
          var keynum;
          var keyChars = /[\x00\x08]/;
          var validChars = new RegExp(charVal);
          if (window.event) {
              keynum = e.keyCode;
          }
          else if (e.which) {
              keynum = e.which;
          }
          var keychar = String.fromCharCode(keynum);
          if (!validChars.test(keychar) && !keyChars.test(keychar)) {
              return false
          } else {
              return keychar;
          }
      }

      function ValidateEmail(mail) {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
              return (true)
          }
          toastr.warning('You have entered an invalid email address!');
          return (false)
      }
      function displayToastr() {
          toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": true,
              "positionClass": "toast-bottom-right",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
          }
      }