// Osmo Supply — CSS Character Stagger, adapted to existing links and buttons.
function initButtonCharacterStagger() {
  const offsetIncrement = 0.01;
  document.querySelectorAll('a:not(.nav-dropdown__link), button').forEach(control => {
    if (control.classList.contains('btn-animate-chars')) return;
    control.classList.add('btn-animate-chars');
    // Keep an intact accessible name rather than announcing individual letters.
    const label = control.textContent.trim();
    if (label && !control.hasAttribute('aria-label')) control.setAttribute('aria-label', label);
    const walker = document.createTreeWalker(control, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.textContent.trim() && !node.parentElement.closest('svg, [aria-hidden="true"]')
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    let characterIndex = 0;
    textNodes.forEach(node => {
      const text = node.textContent;
      const wrapper = document.createElement('span');
      wrapper.className = 'btn-animate-chars__text';
      wrapper.setAttribute('data-button-animate-chars', '');
      wrapper.setAttribute('aria-hidden', 'true');
      [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${characterIndex++ * offsetIncrement}s`;
        if (char === ' ') span.style.whiteSpace = 'pre';
        wrapper.appendChild(span);
      });
      node.replaceWith(wrapper);
    });
    const background = document.createElement('span');
    background.className = 'btn-animate-chars__bg';
    background.setAttribute('aria-hidden', 'true');
    control.prepend(background);
  });
}
document.addEventListener('DOMContentLoaded', initButtonCharacterStagger);
