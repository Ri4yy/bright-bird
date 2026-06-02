// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 20,
//     enabled: true,

//     breakpoints: {
//         320: {
//             allowTouchMove: true,
//             slidesPerView: 1,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         480: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         768: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         1024: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1280: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1921: {
//             allowTouchMove: true,
//             slidesPerView: 4,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

const HeroSwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    enabled: true,
    slidesPerView: 1,

    speed: 1200,
    parallax: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
        el: '.hero-swiper__pagination',
    },
}); 
const gallerySwiper = new Swiper('.gallery-swiper', {
    enabled: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 600,
    grabCursor: true,

    navigation: {
        nextEl: '.about-brand__slider-btn--next',
        prevEl: '.about-brand__slider-btn--prev',
    },
}); 

const mainSectionsSwiper = new Swiper('.main-sections-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 1.7,
            spaceBetween: 20,
        },
        375: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        800: {
            allowTouchMove: true,
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1921: {
            allowTouchMove: true,
            slidesPerView: 5.5,
            spaceBetween: 20,
        },
    },
  
    navigation: {
        nextEl: '.main-sections-swiper__btn--next',
        prevEl: '.main-sections-swiper__btn--prev',
    },
}); 

const sectionsSwiper = new Swiper('.sections-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 1.7,
            spaceBetween: 16,
        },
        375: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1921: {
            allowTouchMove: true,
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
  
    navigation: {
        nextEl: '.sections-swiper__btn--next',
        prevEl: '.sections-swiper__btn--prev',
    },
}); 

const favoritesSwiper = new Swiper('.favorites-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 16,
        },
        769: {
            allowTouchMove: true,
            slidesPerView: 2.3,
            spaceBetween: 16,
        },
        1025: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4,
            spaceBetween: 16,
        },
    },
  
    navigation: {
        nextEl: '.favorites-swiper__btn--next',
        prevEl: '.favorites-swiper__btn--prev',
    },
}); 

const similarSwiper = new Swiper('.similar-swiper', {
    // Optional parameters
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 16,
        },
        601: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1025: {
            allowTouchMove: true,
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  
    navigation: {
        nextEl: '.similar-swiper__btn--next',
        prevEl: '.similar-swiper__btn--prev',
    },
}); 

const historySwiper = new Swiper('.history-swiper', {
    // Optional parameters
    enabled: true,
    slidesPerView: 2,
    spaceBetween: 16,
  
    navigation: {
        nextEl: '.history-swiper-btn-next',
        prevEl: '.history-swiper-btn-prev',
    },
}); 

const reviewsSwiper = new Swiper('.reviews-swiper', {
    enabled: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 1.5,
            spaceBetween: 6,
        },
        375: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 12,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2.3,
            spaceBetween: 12,
        },
        769: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.reviews-swiper__btn--next',
        prevEl: '.reviews-swiper__btn--prev',
    },
});

const productSmallSwiper = new Swiper(".product-small-swiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 16,
        },
        375: {
            allowTouchMove: true,
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: {
            allowTouchMove: true,
            direction: "horizontal",
            slidesPerView: 3,
            spaceBetween: 16,
        },
        601: {
            allowTouchMove: true,
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 12,
        },
        769: {
            allowTouchMove: true,
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            allowTouchMove: true,
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
const productPreviewSwiper = new Swiper(".product-preview-swiper", {
    spaceBetween: 10,

    thumbs: {
        swiper: productSmallSwiper,
    },
});