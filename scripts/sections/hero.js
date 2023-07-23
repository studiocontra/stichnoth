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
    new Swiper('.js-hero-slider', {
      slidesPerView: 1,
      mobileFirst: true,
      effect: 'fade',
      loop: true,
      watchOverflow: true,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.js-hero-next',
        prevEl: '.js-hero-prev',
      }
    });
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.hero');