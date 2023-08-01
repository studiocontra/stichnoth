/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  data() {
    return {
      activeSection: null,
      targetSectionTop: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => this.activeOnScroll());
  },
  methods: {
    activeOnScroll() {
      document.querySelectorAll('.js-stores-nav-item').forEach(item => {
        const targetSection = document.querySelector(`.js-store-anchor[data-anchor="${item.dataset['section']}"]`);
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;

        if(window.scrollY > targetTop) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    },
    goToSection(target) {
      const targetSection = document.querySelector(`.js-store-anchor[data-anchor="${target}"]`).getBoundingClientRect().top + window.scrollY;
      const storesNav = document.querySelector('.stores__nav').offsetHeight;

      this.activeSection = target;
      this.targetSectionTop = targetSection - storesNav;

      window.scrollTo({
        top: this.targetSectionTop,
        behavior: 'smooth'
      })
    },
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.stores');