const carouselImagesText = Vue.createApp({
  mounted() {
    new Swiper('.js-carousel-images-text-slider', {
      loop: false,
      speed: 1000,
      slidesPerView: 1.5,
      watchOverflow: true,
      centeredSlides: true,
      initialSlide: 1,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        650: {
          slidesPerView: 2.5
        },
        768: {
          slidesPerView: 3
        }
      }
    });
  }
});

carouselImagesText.config.compilerOptions.delimiters = ['[[', ']]'];
carouselImagesText.mount('.carousel-images-text');