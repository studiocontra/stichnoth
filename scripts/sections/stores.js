const storesApp = Vue.createApp({
  data() {
    return {
      activeSection: null,
      targetSectionTop: null,
      allLinks: null,
      storesNavHeight: 88,
    };
  },
  mounted() {
    this.allLinks = document.querySelectorAll('.js-stores-nav-item');
    this.storesNavHeight = document.querySelector('.stores__nav').offsetHeight;

    window.addEventListener('scroll', () => this.activeOnScroll());
  },
  methods: {
    activeOnScroll() {
      this.allLinks.forEach(item => {
        const targetSection = document.querySelector(`.js-store-anchor[data-anchor="${item.dataset['section']}"]`);
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;

        if((window.scrollY + this.storesNavHeight) > targetTop) {
          this.allLinks.forEach(link => link.classList.remove('active'));
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    },
    goToSection(target) {
      const targetSection = document.querySelector(`.js-store-anchor[data-anchor="${target}"]`).getBoundingClientRect().top + window.scrollY;

      this.activeSection = target;
      this.targetSectionTop = targetSection - (this.storesNavHeight - 20);

      window.scrollTo({
        top: this.targetSectionTop,
        behavior: 'smooth'
      })
    },
  }
});

storesApp.config.compilerOptions.delimiters = ['[[', ']]'];
storesApp.mount('.stores');