// Document Ready
$(document).ready(function () {
    var imageMain = document.getElementsByClassName('profile-image');
    new simpleParallax(imageMain, {
        orientation: 'right'
    });
    var image0 = document.getElementsByClassName('img-0');
    new simpleParallax(image0, {
        orientation: 'left'
    });

    var image1 = document.getElementsByClassName('img-1');
    new simpleParallax(image1, {
        overflow: true, delay: .3
    });

    var image2 = document.getElementsByClassName('img-2');
    new simpleParallax(image2, {
        overflow: true, delay: .3
    });

    var image3 = document.getElementsByClassName('img-3');
    new simpleParallax(image3, {
        overflow: true, delay: .3
    });

    var image4 = document.getElementsByClassName('img-4');
    new simpleParallax(image4, {
        orientation: 'right'
    });
});


ScrollReveal().reveal(".skills-section", { delay: 200 });
ScrollReveal().reveal(".sponsors-section", { delay: 200 });
ScrollReveal().reveal(".image-section", { delay: 200 });
ScrollReveal().reveal(".plan-section", { delay: 200 });
ScrollReveal().reveal(".careers-section", { delay: 200 });
ScrollReveal().reveal(".footer-section", { delay: 200 });
