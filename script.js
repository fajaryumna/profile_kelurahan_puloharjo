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

// looping untuk foto
$(document).ready(function () {
    // Array yang berisi URL foto-foto dalam galeri
    const fotoGaleri = [
        "img/galeri/1.jpeg",
        "img/galeri/2.jpeg",
        "img/galeri/3.jpeg",
        "img/galeri/4.jpeg",
        "img/galeri/5.jpeg",
        "img/galeri/6.jpeg",
        "img/galeri/7.jpeg",
        "img/galeri/8.jpeg",
        "img/galeri/9.jpeg",
        "img/galeri/10.jpeg",
        "img/galeri/11.jpeg",
    ];

    const galeriContainer = $("#galeriContainer");

    // Loop untuk memasukkan foto-foto ke dalam galeri
    for (let i = 0; i < fotoGaleri.length; i++) {
        const fotoSrc = fotoGaleri[i];

        // Buat elemen <img> untuk foto
        const imgElement = $("<img>").attr({
            src: fotoSrc,
            alt: "Galeri " + (i + 1),
            class: "galeri-img",
            "data-bs-toggle": "modal",
            "data-bs-target": "#modalFoto",
        });

        // Buat elemen <div> untuk galeri item
        const galeriItem = $("<div>").addClass("galeri-item").append(imgElement);

        // Tambahkan galeri item ke dalam galeri container
        galeriContainer.append(galeriItem);
    }
});


$(document).ready(function () {
    $('.galeri-img').click(function () {
        const imgSrc = $(this).attr('src');
        $('#fotoMelayang').attr('src', imgSrc);
        $('#modalFoto').modal('show');

    });
});

