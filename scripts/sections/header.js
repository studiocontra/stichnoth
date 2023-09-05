const mainHeaderApp = Vue.createApp({
	data() {
		return {
      currentLocale: '',
		  isSearchOpen: false,
      isMenuOpen: false,
      flagResize: false,
      isCartOpen: false,
		}
	},
  mounted() {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768 && !this.flagResize) {
        this.isMenuOpen = false;
        this.flagResize = true;
      } else if (window.innerWidth <= 768 && this.flagResize) {
        this.flagResize = false;
      }
    });
  },
  methods: {
    changeLocale(target, formId) {
      this.currentLocale = target;

      setTimeout(() => {
        document.getElementById(formId).submit();
      }, 200);
    },
    setMenuTop() {
      const headerHeight = document.querySelector('header').offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    },
    toggleMenu() {
      this.setMenuTop();
      this.isMenuOpen = !this.isMenuOpen;
    },
    openDropdown(target, e) {
      if(window.innerWidth <= 768) {
        e.preventDefault();
        document.querySelector(`.submenu[data-id="${target}"]`).classList.toggle('active');
      }
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.wrap-header');