function alertMe(e, f) {

    toastr.options.positionClass = 'toast-top-center-ok'
    toastr.options.timeOut = '3000'
    toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": true,
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
    switch (f) {

        case "Success":
            toastr.success(e);
            break;
        case "Error":
            toastr.error(e);
            break;
        case "Info":
            toastr.info(e);
            break;
        case "Warning":
            toastr.warning(e);
            break;
    }

};

