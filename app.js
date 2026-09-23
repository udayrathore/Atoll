const dialog = document.querySelector('#detail-dialog');
function showDetail(title, description) {
  document.querySelector('#detail-title').textContent = title;
  document.querySelector('#detail-description').textContent = description;
  dialog.showModal();
}
document.querySelectorAll('[data-detail]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showDetail(link.dataset.detail, link.dataset.description);
}));
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
  showDetail('Contact Atoll Solutions', 'Let’s discuss better visibility across your operations. Contact details can be connected here when the page is prepared for launch.');
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); } });

// Keep the fixed navigation legible over the white benefits section.
const mainNav = document.querySelector('.mega-nav');
function updateNavSurface() { mainNav.classList.toggle('is-scrolled', window.scrollY > 80); }
window.addEventListener('scroll', updateNavSurface, { passive: true });
updateNavSurface();
