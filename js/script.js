document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    const button = document.getElementById('cta-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Gracias por tu interés en Afila Facil!');
        });
    }
});