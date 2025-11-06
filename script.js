let slideIndex = 1; // Startet mit dem ersten Bild

// Zeigt die aktuelle Slide an und versteckt die anderen
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Wenn n größer ist als die Anzahl der Slides, gehe zur ersten Slide
    if (n > slides.length) {
        slideIndex = 1
    }
    // Wenn n kleiner als 1 ist, gehe zur letzten Slide
    if (n < 1) {
        slideIndex = slides.length
    }

    // Alle Slides ausblenden
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Alle Punkte inaktiv machen
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Die aktuelle Slide anzeigen und den entsprechenden Punkt aktiv machen
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Navigiert zu einer bestimmten Slide (n ist die Nummer der Slide)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Navigiert zur nächsten/vorherigen Slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Beim Laden der Seite die erste Slide anzeigen
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
});