const contentItems = Vue.createApp({
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

contentItems.config.compilerOptions.delimiters = ['[[', ']]'];
contentItems.mount('.content-items');