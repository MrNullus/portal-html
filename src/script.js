var slideItem = 0;

window.onload = function() {
    setInterval(passarSlide, 2000);

    var slideWidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for (var i in objs) {
        objs[i].style.width = slideWidth;
    }

}

function passarSlide() {
    var slideWidth = document.getElementById("slideshow").offsetWidth;

    if (slideItem >= 3) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    document.getElementsByClassName('slideshowarea')[0].style.marginLeft = `-${slideWidth * slideItem}px`;

}

function mudarSlide(pos) {
    var slideWidth = document.getElementById('slideshow').offsetWidth;
    slideItem = pos;

    document.getElementsByClassName('slideshowarea')[0].style.marginLeft = `-${slideWidth * slideItem}px`;
}

function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
