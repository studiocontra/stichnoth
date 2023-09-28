const cartPageApp = Vue.createApp({
  data() {
    return {
      errorMsg: null,
    }
  }
});

cartPageApp.config.compilerOptions.delimiters = ['[[', ']]'];
const mountedCartPageApp = cartPageApp.mount('.wrap-page--cart');


function addCartListeners() {
  console.log('listeners');
  document
    .querySelectorAll('.js-update-cart-qty')
    .forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const {line, qty} = btn.dataset;

        const res = await fetch(`${window.Shopify.routes.root}cart/change.js?line=${line}&quantity=${qty}`, {
          method: 'POST'
        });

        if(res.status === 422) {
          mountedCartPageApp.$data.errorMsg = true;
          return
        }

        updateCartPage();
      })

    });

  document
    .querySelectorAll('.js-delete-cart-qty')
    .forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const {line, qty} = btn.dataset;

        await fetch(`${window.Shopify.routes.root}cart/change.js?line=${line}&quantity=${qty}`, {
          method: 'POST'
        });

        updateCartPage();
      })

    });
}

addCartListeners();

async function updateCartPage() {
  const res = await fetch('/?section_id=main-cart-items');
  const text = await res.text();

  const resHtml = document.createElement('div');
  resHtml.innerHTML = text;

  // Update Items
  const newDrawer = resHtml.querySelector('.wrap-cart-form').innerHTML;
  document.querySelector('.wrap-cart-form').innerHTML = newDrawer;

  addCartListeners();
}
