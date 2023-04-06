$(document).ready(function () {
    $("a[href^='#']").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scroollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});



    var account_btn = document.getElementById("account-btn")
    var login = document.getElementById("login")
    var register = document.getElementById("register")

    function Register() {
      account_btn.style.left="110px";
      register.style.left="50px";
      login.style.left="-400px";
    }