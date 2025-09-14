var slides = document.querySelectorAll('.slide');
        var dots = document.querySelectorAll('.dot');
        var counter = 0;
        var interval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function switchImage(index) {
            counter = index;
            showSlide(counter);
            resetInterval(); // Reset auto-slide when clicking dots
        }

        function nextSlide() {
            counter = (counter + 1) % slides.length;
            showSlide(counter);
            resetInterval();
        }

        function prevSlide() {
            counter = (counter - 1 + slides.length) % slides.length;
            showSlide(counter);
            resetInterval();
        }

        function autoSlide() {
            counter = (counter + 1) % slides.length;
            showSlide(counter);
        }

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(autoSlide, 3000);
        }

        interval = setInterval(autoSlide, 3000);
