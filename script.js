var cookies = new bootstrap.Modal(document.getElementById('cookies'), {
    keyboard: false
})

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookieBannerDisplayed", "true");
    cookies.toggle();
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookies.toggle();
    }
}, 2000);

// Example starter JavaScript for disabling form submissions if there are invalid fields //
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to //
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission //
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()