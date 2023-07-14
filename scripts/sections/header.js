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
  methods: {
    changeLocale(target, formId) {
      this.currentLocale = target;

      setTimeout(() => {
        document.getElementById(formId).submit();
      }, 200);
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.header');