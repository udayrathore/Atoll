const industryCards = [...document.querySelectorAll('[data-industry-card]')];
function activateIndustry(card) {
  industryCards.forEach(item => {
    const active = item === card;
    item.classList.toggle('is-active', active);
    item.querySelector('.industry-toggle').setAttribute('aria-expanded', String(active));
    item.querySelector('.industry-details').inert = !active;
  });
}
industryCards.forEach(card => {
  card.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && !industryCards.some(item => item !== card && item.contains(document.activeElement))) activateIndustry(card);
  });
  card.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && !card.contains(document.activeElement)) activateIndustry(null);
  });
  card.addEventListener('focusout', event => {
    if (!card.contains(event.relatedTarget)) activateIndustry(null);
  });
  card.querySelector('.industry-toggle').addEventListener('click', () => activateIndustry(card));
  card.addEventListener('focusin', () => activateIndustry(card));
});

// Start with all photo cards closed.
activateIndustry(null);
