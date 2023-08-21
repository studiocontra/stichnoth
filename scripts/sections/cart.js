function addCartListeners() {
  document
    .querySelectorAll('.js-update-cart-qty')
    .forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const {line, qty} = btn.dataset;

        const res = await fetch(`${window.Shopify.routes.root}cart/change.js?line=${line}&quantity=${qty}`, {
          method: 'POST'
        });

        updateCart();
      })

    });

  document
    .querySelectorAll('.js-delete-cart-qty')
    .forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const {line} = btn.dataset;

        const res = await fetch(`${window.Shopify.routes.root}cart/change.js?line=${line}&quantity=0`, {
          method: 'POST'
        });

        updateCart();
      })

    });
}

addCartListeners();

async function updateCart() {
  const res = await fetch('/?section_id=header');
  const text = await res.text();

  const resHtml = document.createElement('div');
  resHtml.innerHTML = text;

  // Update drawer
  const newDrawer = resHtml.querySelector('.wrap-cart-form').innerHTML;
  document.querySelectorAll('.wrap-cart-form').forEach(form => {
    form.innerHTML = newDrawer;
  })

  // Update Cart count
  const newCounter = resHtml.querySelector('.header__icon--cart').innerHTML;
  document.querySelector('.header__icon--cart').innerHTML = newCounter;

  addCartListeners();
}