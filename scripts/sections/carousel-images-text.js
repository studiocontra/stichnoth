const carouselImagesText = Vue.createApp({
  mounted() {
    new Swiper('.js-carousel-images-text-slider', {
      loop: false,
      speed: 1000,
      slidesPerView: 'auto',
      watchOverflow: true,
      centeredSlides: true,
      initialSlide: 1,
      autoplay: {
        delay: 3000,
      },
    });
  }
});

carouselImagesText.config.compilerOptions.delimiters = ['[[', ']]'];
carouselImagesText.mount('.carousel-images-text');