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
    new Swiper('.collection-list__slider', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      watchOverflow: true,
      centerInsufficientSlides: true,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.js-list-next',
        prevEl: '.js-list-prev',
      },
    });
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.collection-list');