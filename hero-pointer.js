// Subtle mouse parallax inspired by GreenSock's KKmBGvz demo.
// CSS translate keeps this motion separate from the sculpture's scroll transform.
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('#home');
  if (!hero || !window.gsap) return;

  gsap.matchMedia().add(
    '(min-width: 992px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    () => {
      const layers = [
        { element: hero.querySelector('.sculpture'), distance: 10 },
        { element: hero.querySelector('.company-note'), distance: 6 }
      ].filter(layer => layer.element).map(layer => {
        const position = { x: 0, y: 0 };
        const render = () => {
          layer.element.style.translate = `${position.x}px ${position.y}px`;
        };
        return {
          ...layer,
          originalTranslate: layer.element.style.translate,
          x: gsap.quickTo(position, 'x', { duration: .7, ease: 'power3.out', onUpdate: render }),
          y: gsap.quickTo(position, 'y', { duration: .7, ease: 'power3.out', onUpdate: render })
        };
      });

      const reset = () => layers.forEach(layer => { layer.x(0); layer.y(0); });
      const move = event => {
        if (event.pointerType !== 'mouse') return;
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        layers.forEach(layer => { layer.x(-x * layer.distance); layer.y(-y * layer.distance); });
      };

      hero.addEventListener('pointermove', move, { passive: true });
      hero.addEventListener('pointerleave', reset);
      window.addEventListener('blur', reset);
      window.addEventListener('resize', reset);
      return () => {
        hero.removeEventListener('pointermove', move);
        hero.removeEventListener('pointerleave', reset);
        window.removeEventListener('blur', reset);
        window.removeEventListener('resize', reset);
        layers.forEach(layer => { layer.element.style.translate = layer.originalTranslate; });
      };
    }
  );
});
