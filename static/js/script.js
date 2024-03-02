
        document.addEventListener('DOMContentLoaded', function() {
            var container = document.querySelector('.hero-section-container');
            var images = ['static/images/Hero.jpg', 'static/images/Hero2.jpg' , 'static/images/Hero3.jpg'];
            var currentImageIndex = 0;

            setInterval(function() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                container.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
            }, 3000);
        });



