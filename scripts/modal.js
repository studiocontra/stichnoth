const closeModalEvent = new Event('close-modal');

function closeModal() {
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

function moveModalToEnd(el) {
  const target = el.dataset.target.substring(1);

  document.body.appendChild(document.getElementById(target));
}

document.querySelectorAll('[data-toggle="modal"]').forEach(
  (item) => {
    // moveModalToEnd(item);
    item.addEventListener('click', openModal);
  }
);

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) closeModal();
});