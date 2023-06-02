//  Hamburger Menu  //

const hamburger = document.getElementById('hamburger__toggle');
const hamburgerActive = document.getElementById('hamburger__active')

hamburger.addEventListener('click', function() {
    hamburgerActive.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//  Galerie Modul

const gallery = document.getElementById('gallery__items');
const galleryItemsImg = document.querySelectorAll('.gallery__items--img');
const galleryZoomImg = document.querySelectorAll('.gallery__zoom--img')

// Öffnen des Zoom-Modus

galleryItemsImg.forEach((image, imageIdx) => {
    image.addEventListener('click', function() {
        let x = 0;
        galleryZoomImg[imageIdx].classList.add('active');
        image.classList.add('active');
        gallery.classList.remove('hover--active');
        if (x == 0) {
            gallery.classList.add('hover--active')
        }
    })
});

// Schließen des Zoom-Modus
const galleryZoomClose = document.getElementById('gallery__zoom--close')

galleryZoomImg.forEach((zoom, zoomIdx) => {
    galleryZoomClose.addEventListener('click', function(){
        zoom.classList.remove('active')
        gallery.classList.add('hover--active')
    })
})

//  Pfeile zum wechseln der Bilder

const arrowLeft = document.getElementById('gallery__module--arrow-left');
const arrowRight = document.getElementById('gallery__module--arrow-right');
// Links / Zurück
arrowLeft.addEventListener('click', function() {
    galleryZoomImg.forEach((element, elementIdx) => {
        if (element.classList.contains('active')) {
            return x = elementIdx;
        }
    });
    galleryZoomImg[x].classList.remove('active');
    if (x !== 0) {
        galleryZoomImg[x - 1].classList.add('active');
    } else {
        galleryZoomImg[galleryZoomImg.length - 1].classList.add('active');
    }
})
// Rechts / Vor
arrowRight.addEventListener('click', function() {
    galleryZoomImg.forEach((element, elementIdx) => {
        if (element.classList.contains('active')) {
            return x = elementIdx;
        }
    });
    galleryZoomImg[x].classList.remove('active');
    if (x !== galleryZoomImg.length - 1) {
        galleryZoomImg[x + 1].classList.add('active');
    } else {
        galleryZoomImg[0].classList.add('active');
    }
})