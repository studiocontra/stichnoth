/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  data() {
    return {
      activeItem: 0,
    };
  },
  methods: {
    openItem(idx, { target }) {
      this.activeItem = idx;

      const contentHeight = target.nextElementSibling.scrollHeight;
      console.log(contentHeight);
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.image-accordion');