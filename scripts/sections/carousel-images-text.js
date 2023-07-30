/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  mounted() {
    new Swiper('.js-carousel-images-text-slider', {
      loop: true,
      speed: 1000,
      slidesPerView: "auto",
      watchOverflow: true,
      centerInsufficientSlides: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.carousel-images-text');