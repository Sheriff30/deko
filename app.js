var mySwiper = new Swiper('.swiper-container1', {
    loop: true,
    // spaceBetween: 2,
    breakpoints: {
        1024: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 1
        }
    }
});


// First and Last Image Half Half Slider
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: false,
    // spaceBetween: 2,
    slidesPerView: 'auto',
    initialSlide: 1, 
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // spaceBetween: 5
        },
        768: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // spaceBetween: 5
        },
        500: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // spaceBetween: 5
        },
        0: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // spaceBetween: 5
        }
    }
});

// Desktop
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const number = button.id.replace('btn', '');
            const content = document.getElementById(`content${number}`);
            content.style.display = 'block'; 
        });
        button.addEventListener('mouseout', function() {
            const number = button.id.replace('btn', '');
            const content = document.getElementById(`content${number}`);
            content.style.display = 'none'; 
        });
    });
});

// Mobille & Tablet
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const number = button.id.replace('btn', '');
            const content = document.getElementById(`content-mobile${number}`);
            content.style.display = 'block'; 
        });
        button.addEventListener('mouseout', function() {
            const number = button.id.replace('btn', '');
            const content = document.getElementById(`content-mobile${number}`);
            content.style.display = 'none'; 
        });
    });
});


