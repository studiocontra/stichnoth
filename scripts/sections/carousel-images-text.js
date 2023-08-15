/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
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

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.carousel-images-text');