const productList = Vue.createApp({
  mounted() {
    new Swiper('.product-list__slider', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      watchOverflow: true,
      centerInsufficientSlides: true,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.js-prod-list-next',
        prevEl: '.js-prod-list-prev',
      },
    });
  }
});

productList.config.compilerOptions.delimiters = ['[[', ']]'];
productList.mount('.product-list');