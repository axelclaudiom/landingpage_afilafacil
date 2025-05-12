<script>
  const images = document.querySelectorAll('.slider img');
  let currentIndex = 0;

  // Oculta todas las imágenes excepto la primera
  for (let i = 0; i < images.length; i++) {
    if (i === 0) {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }

  setInterval(function() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000);
</script>
