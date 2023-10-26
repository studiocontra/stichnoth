if(document.getElementById('modal-popup')) {
  let popupCookie = sessionStorage.getItem("popup");

  if(!popupCookie) {
    setTimeout(() => {
      document.getElementById('modal-popup').classList.toggle('active');
      document.getElementById('modal-popup').removeAttribute('aria-hidden');
      document.getElementById('modal-popup').focus();
    }, 2000);
  }
}
