const productCarouselApp = Vue.createApp({
  data() {
    return {
      isZooming: false
    }
  },
  mounted() {
    new Swiper(".js-carousel-products-swiper", {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: ".js-swiper-carousel-products-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".js-swiper-carousel-products-button-next",
        prevEl: ".js-swiper-carousel-products-button-prev",
      }
    });
  },
  methods: {
    zoom(itemId, e) {
      this.isZooming = itemId;

      const zoomer = e.currentTarget.querySelector('.zoom');
      let offsetX, offsetY;
      let x, y;

      offsetX = e.offsetX;
      offsetY = e.offsetY;

      x = offsetX / e.currentTarget.offsetWidth * 100;
      y = offsetY / e.currentTarget.offsetHeight * 100;

      zoomer.style.backgroundPosition = x + '% ' + y + '%';

    },
  }
});
productCarouselApp.mount('.product__media-wrapper');


const productAccordionApp = Vue.createApp({
  data() {
    return {
      activeDetailsAccordion: null
    };
  },
  mounted() {
    this.toggleAccordionItem('detailsAccordion', 0);
  },
  methods: {
    toggleAccordionItem(accordion, idx) {
      if(this.activeDetailsAccordion === idx) return this.activeDetailsAccordion = null;

      this.activeDetailsAccordion = idx;

      const contentWrapper = document.querySelector(`[data-ref="${accordion}"] .accordion-item[data-idx="${idx}"] .accordion-item__content`);

      const contentHeight = contentWrapper.scrollHeight;

      contentWrapper.style.maxHeight = `${contentHeight}px`;
    }
  }
});
productAccordionApp.config.compilerOptions.delimiters = ['[[', ']]'];
productAccordionApp.mount('.product__accordion');


const productFaqsApp = Vue.createApp({
  data() {
    return {
      activeFaqsGroup: null,
      activeFaqsAccordion: null
    };
  },
  mounted() {
    this.toggleFaqItem(0, 0);
  },
  methods: {
    toggleFaqItem(accordion, idx) {
      console.log(accordion, idx);
      if (this.activeFaqsGroup === accordion && this.activeFaqsAccordion === idx) {
        this.activeFaqsGroup = null;
        this.activeFaqsAccordion = null;
        return true;
      }

      this.activeFaqsGroup = accordion;
      this.activeFaqsAccordion = idx;

      const contentWrapper = document.querySelector(`[data-ref="faqsAccordion-${accordion}"] .accordion-item[data-idx="${idx}"] .accordion-item__content`);
      const contentHeight = contentWrapper.scrollHeight;

      contentWrapper.style.maxHeight = `${contentHeight}px`;
    },
    checkActive(accordion, idx) {
      return this.activeFaqsGroup === accordion && this.activeFaqsAccordion === idx;
    }
  },
});
productFaqsApp.config.compilerOptions.delimiters = ['[[', ']]'];
productFaqsApp.mount('.product__faqs');


const productFormApp = Vue.createApp({
  data() {
    return {
      isAdding: false,
      engraveStyle: '',
      engraveText: ''
    };
  },
  methods: {
    addToCart({target}) {
      const {product, qty} = target.dataset;
      const urlParams = new URLSearchParams(window.location.search);
      const variant = urlParams.get('variant');
      const engraveStyleProp = (document.getElementById('engrave_style')) ? document.getElementById('engrave_style').dataset['prop'] : '';
      const engraveStyle = (document.getElementById('engrave_style')) ? document.getElementById('engrave_style').value : '';
      const engraveTextProp = (document.getElementById('engrave_text')) ? document.getElementById('engrave_text').dataset['prop'] : '';
      const engraveText = (document.getElementById('engrave_text')) ? document.getElementById('engrave_text').value : '';

      this.isAdding = true;

      let formData = {
        'items': [{
          'product-id': product,
          'id': variant || product,
          'quantity': qty,
          'properties': {
            [engraveStyleProp]: engraveStyle,
            [engraveTextProp]: engraveText,
          }
        }]
      };

      fetch(`${window.Shopify.routes.root}cart/add.js`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => {
          res.json();
          this.isAdding = false;

          updateCartDrawer();
        })
        .then(res => {
          mountedHeaderApp.$data.isCartOpen = true;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
});
productFormApp.config.compilerOptions.delimiters = ['[[', ']]'];
productFormApp.mount('.product-form__add');
