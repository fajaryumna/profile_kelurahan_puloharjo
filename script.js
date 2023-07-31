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

// menandai halaman aktif
$(document).ready(function () {
    var currentPage = location.pathname.split("/").slice(-1)[0];
    $('.navbar-nav a[href="' + currentPage + '"]').addClass('active');
});
