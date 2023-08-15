/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
	data() {
		return {
      currentLocale: '',
		  isSearchOpen: false,
      isMenuOpen: false,
		}
	},
  mounted() {
    const headerHeight = document.querySelector('header').offsetHeight;
    console.log(headerHeight);
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  },
  methods: {
    changeLocale(target, formId) {
      this.currentLocale = target;

      setTimeout(() => {
        document.getElementById(formId).submit();
      }, 200);
    },
    toggleMenu() {
      const headerHeight = document.querySelector('header').offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.wrap-header');