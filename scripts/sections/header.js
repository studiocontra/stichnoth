async function updateCartDrawer() {
  const res = await fetch('/?section_id=header');
  const text = await res.text();

  const resHtml = document.createElement('div');
  resHtml.innerHTML = text;

  // Update drawer
  const newDrawer = resHtml.querySelector('.wrap-cart-form').innerHTML;
  document.querySelector('.wrap-cart-form').innerHTML = newDrawer;

  // Update Cart count
  const newCounter = resHtml.querySelector('.js-cart-count').innerHTML;
  document.querySelector('.js-cart-count').innerHTML = newCounter;
}

const mainHeaderApp = Vue.createApp({
	data() {
		return {
		  isSearchOpen: false,
      isMenuOpen: false,
      flagResize: false,
      isCartOpen: false,
      isLoading: false,
      isSearchOpen: false,
      menuPadding: 0,
      activeClass: 'hola-class-8'
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
      if(window.innerWidth <= 768 && e.target.dataset['child'] > 0) {
        e.preventDefault();
        document.querySelector(`.submenu[data-id="${target}"]`).classList.toggle('active');
      }
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
      window.scrollTo(0, 0);
      document.body.classList.toggle('overflow-hidden');
    },
    setPadding(payload, {target}) {
      this.menuPadding = target.offsetLeft;
    },
    async updateCartItem({target}) {
      const { line, qty } = target.dataset;

      const editButtons = target.matches('.js-delete-cart-qty') ||
      target.matches('.js-update-cart-qty');
      this.isLoading = true;

      if(editButtons) {
        const {status} = await fetch(`${window.Shopify.routes.root}cart/change.js?line=${line}&quantity=${qty}`, {
          method: 'POST'
        });

        if(status === 422) {
          this.errorMsg = true;
          return
        }

        await updateCartDrawer();
        this.isLoading = false;
      }
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];

const mountedHeaderApp = mainHeaderApp.mount('.wrap-header');