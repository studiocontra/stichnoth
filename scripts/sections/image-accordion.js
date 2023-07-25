/**
 * Rotating Features App
 */
const mainHeaderApp = Vue.createApp({
  data() {
    return {
      activeItem: 0,
      totalItems: null,
      timer: 5000,
      myInterval: null
    };
  },
  mounted() {
    this.init();

    this.myInterval = setInterval(() => {
      this.nextItem();
    }, this.timer);
  },
  methods: {
    init() {
      this.openItem(0);
      this.totalItems = parseInt(this.$refs['total-input'].value);
    },
    resetInterval() {
      clearInterval(this.myInterval);

      this.myInterval = setInterval(() => {
        this.nextItem();
      }, this.timer);
    },
    openItem(idx) {
      this.activeItem = idx;

      const contentWrapper = document.querySelector(`.accordion-item[data-idx="${idx}"] .accordion-item__content`);
      const contentHeight = contentWrapper.scrollHeight;

      contentWrapper.style.maxHeight = `${contentHeight}px`;
      contentWrapper.querySelector('.progress-bar').style.width = '100%';
    },
    nextItem() {
      this.activeItem = this.activeItem += 1;
      if(this.activeItem > this.totalItems) this.activeItem = 0;

      this.openItem(this.activeItem);
    }
  },
  computed: {
    styleObject() {
      return {
        transitionDuration: this.timer / 1000 + 's'
      }
    }
  }
});

mainHeaderApp.config.compilerOptions.delimiters = ['[[', ']]'];
mainHeaderApp.mount('.image-accordion');