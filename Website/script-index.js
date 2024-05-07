$(document).ready(function () {
    var currentIndex = 1;
    var slideWidth = $('.carousel-slide').outerWidth();

    function showSlide(index) {
        var translateValue = -index * slideWidth;
        $('.carousel-container').css('transform', 'translateX(' + translateValue + 'px)');
    }

    // Auto slide every 5 seconds
    var autoSlide = setInterval(function () {
        currentIndex = (currentIndex + 1) % 3;
        showSlide(currentIndex);
    }, 3000);

    // Pause auto slide on arrow click
    $('.arrow').on('click', function () {
        clearInterval(autoSlide);
    });

    // Left arrow click
    $('.left-arrow').on('click', function () {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showSlide(currentIndex);
    });

    // Right arrow click
    $('.right-arrow').on('click', function () {
        currentIndex = (currentIndex + 1) % 3;
        showSlide(currentIndex);
    });
});
