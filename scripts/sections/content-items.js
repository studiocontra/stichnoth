/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  mounted() {
    new Swiper('.js-items-content', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      watchOverflow: true,
      centerInsufficientSlides: true,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.js-content-items-next',
        prevEl: '.js-content-items-prev',
      },
    });
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.content-items');