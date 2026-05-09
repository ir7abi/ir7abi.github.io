/* Mohamed Irhabi — interactions */
(function () {
  'use strict';

  /* Footer year */
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });

  /* Scroll-reveal observer */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* Stagger card entrance animations */
  const cards = document.querySelectorAll('.card');
  if (cards.length && 'IntersectionObserver' in window) {
    const cardObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Array.from(cards).indexOf(entry.target);
          entry.target.style.animation = `fadeUp 0.7s ${idx * 0.1}s both`;
          cardObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => {
      c.style.opacity = '0';
      cardObs.observe(c);
    });
  }

})();
