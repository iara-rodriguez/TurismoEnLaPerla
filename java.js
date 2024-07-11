// Activar carrusel con intervalo automático
var myCarousel = document.querySelector('#carouselExampleCaptions');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2500, // Cambia cada 2.5 segundos
    wrap: true
});
