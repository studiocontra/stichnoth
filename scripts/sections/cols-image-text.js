const colsImageText = Vue.createApp({
  mounted() {
    new Swiper('.js-cols-image-text-slider', {
      slidesPerView: 1.4,
      spaceBetween: 20,
      mobileFirst: true,
      loop: false,
      watchOverflow: true,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.js-cols-image-text-slider-next',
        prevEl: '.js-cols-image-text-slider-prev',
      },
      breakpoints: {
        450: {
          slidesPerView: 1.6,
        },
        600: {
          slidesPerView: 1.8,
        },
      },
    });

  }
});

colsImageText.config.compilerOptions.delimiters = ['[[', ']]'];
colsImageText.mount('.cols-image-text');