const productCarouselApp = Vue.createApp({
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
  }
});

productCarouselApp.mount('.product__media-wrapper');


const productAccordionApp = Vue.createApp({
  data() {
    return {
      isAdding: false,
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
      isAdding: false,
      activeFaqsAccordion: null
    };
  },
  mounted() {
    this.toggleAccordionItem('faqsAccordion', 0);
  },
  methods: {
    toggleAccordionItem(accordion, idx) {
      if(this.activeFaqsAccordion === idx) return this.activeFaqsAccordion = null;

      this.activeFaqsAccordion = idx;

      const contentWrapper = document.querySelector(`[data-ref="${accordion}"] .accordion-item[data-idx="${idx}"] .accordion-item__content`);

      const contentHeight = contentWrapper.scrollHeight;

      contentWrapper.style.maxHeight = `${contentHeight}px`;
    }
  }
});

productFaqsApp.config.compilerOptions.delimiters = ['[[', ']]'];
productFaqsApp.mount('.product__accordion--faqs');



const productFormApp = Vue.createApp({
  data() {
    return {
      isAdding: false
    };
  },
  methods: {
    addToCart({target}) {
      const {product, qty} = target.dataset;
      this.isAdding = true;

      let formData = {
        'items': [{
          'id': product,
          'quantity': qty
        }],
        'sections': 'cart-drawer'
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

          // window.location.href = `${window.Shopify.routes.root}cart`;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
});

productFormApp.config.compilerOptions.delimiters = ['[[', ']]'];
productFormApp.mount('.product-form__add');
