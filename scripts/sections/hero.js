const mainHeroApp = Vue.createApp({
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

mainHeroApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeroApp.mount('.hero');