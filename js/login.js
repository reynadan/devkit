$(document).ready(function () {
    $("#submit").click(function () {
        console.log('click');
        $.ajax({
            url: 'examplelogin.com',
            type: 'POST',
            data: {
                _username: $("#_username").val(),
                _password: $("#_password").val(),
            },
            success: function () {
                window.location.replace("popup.html");
            },
            error: function () {
                $("#alert").addClass("alert-danger").html("Connexion impossible");
            }
        });
    });
});
