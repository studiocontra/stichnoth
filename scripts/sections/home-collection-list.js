const homeCollectionListApp = Vue.createApp({
  mounted() {
    new Swiper('.home-collection-list__slider', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      watchOverflow: true,
      navigation: {
        nextEl: '.js-list-next',
        prevEl: '.js-list-prev',
      },
    });
  }
});

homeCollectionListApp.config.compilerOptions.delimiters = ['[[', ']]'];
homeCollectionListApp.mount('.home-collection-list');