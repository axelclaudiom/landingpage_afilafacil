const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].style.display = 'none'; // Oculta la imagen actual
  currentIndex = (currentIndex + 1) % images.length; // Pasa a la siguiente imagen
  images[currentIndex].style.display = 'block'; // Muestra la nueva imagen
}, 3000); // Cambia cada 3 segundos