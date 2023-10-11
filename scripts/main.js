 /* Initialization Swiper */
 
 document.addEventListener('DOMContentLoaded', function () {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });

    /* Accordion */

    document.addEventListener('DOMContentLoaded', function () {
        var questionElements = document.querySelectorAll('.accordion-question');
    
        questionElements.forEach(function (question) {
            question.addEventListener('click', function () {
                var answer = this.parentElement.querySelector('.accordion-answer');
                var arrow = this.querySelector('.arrow');
    
                if (answer.style.display === 'block' || answer.style.display === '') {
                    answer.style.display = 'none';
                    arrow.textContent = '▼';
                } else {
                    answer.style.display = 'block';
                    arrow.textContent = '▲';
                }
            });
        });
    });