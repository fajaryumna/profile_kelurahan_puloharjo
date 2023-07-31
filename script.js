document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('show');
});

// Autoplay carousel every 4 seconds
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 4000,
        ride: "carousel"

    });
});