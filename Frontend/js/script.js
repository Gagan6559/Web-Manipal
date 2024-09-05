<script>
        let slideIndex = 0;

        function moveSlide(step) {
            let slides = document.querySelectorAll('.carousel-card');
            const totalSlides = slides.length;

            slideIndex = (slideIndex + step + totalSlides) % totalSlides;
            const offset = -slideIndex * 100;
            document.querySelector('.carousel-items').style.transform = `translateX(${offset}%)`;
        }

        let learnerSlideIndex = 0;

function moveLearnerSlide(step) {
    let slides = document.querySelectorAll('.learner-carousel-slide');
    const totalSlides = slides.length;

    learnerSlideIndex = (learnerSlideIndex + step + totalSlides) % totalSlides;
    const offset = -learnerSlideIndex * 100;
    document.querySelector('.learner-carousel-container').style.transform = `translateX(${offset}%)`;
}

    </script>