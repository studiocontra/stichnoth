/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  data() {
    return {
      activeSection: null,
    };
  },
  methods: {
    goToSection(target) {
      const targetSection = document.querySelector(`.js-store-anchor[data-anchor="${target}"]`).getBoundingClientRect().top;

      this.activeSection = target;
      console.log(target);

      window.scrollTo({
        top: targetSection,
        behavior: 'smooth'
      })
    },
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.stores');