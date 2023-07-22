/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
	data() {
		return {
      currentLocale: '',
		  isSearchOpen: false
		}
	},
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

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.product-list');