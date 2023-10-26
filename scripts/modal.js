const closeModalEvent = new Event('close-modal');

function closeModal(popup = false) {
  if(popup) {
    sessionStorage.setItem("popup", true);
  }
  document.querySelectorAll('.wrap-modal').forEach(
    (modal) => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  );
  document.dispatchEvent(closeModalEvent);
}

function openModal(e) {
  e.preventDefault();
  const target = this.dataset.target.substring(1);
  document.getElementById(target).classList.toggle('active');
  document.getElementById(target).removeAttribute('aria-hidden');
  document.getElementById(target).focus();
}

document.querySelectorAll('[data-toggle="modal"]').forEach(
  (item) => {
    item.addEventListener('click', openModal);
  }
);

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    if(document.getElementById('modal-popup').classList.contains('active')) {
      sessionStorage.setItem("popup", true);
    }
    closeModal();
  }
});